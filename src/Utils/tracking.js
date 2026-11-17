// src/utils/tracking.js
// Guarda os parâmetros de rastreio de anúncios e repassa para os links da Eurekha.
// Fontes, em ordem: (1) URL da visita atual -> guardada no localStorage por 30 dias;
// (2) cookie _fbc do pixel da Meta, como reserva para visitas posteriores.

const CHAVES = [
  "fbclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbc", // cookie _fbc inteiro (inclui a hora real do clique)
];

const GUARDA = "cc_attrib";
const VALIDADE_MS = 30 * 24 * 60 * 60 * 1000; // 30 dias

function lerGuardado() {
  try {
    const raw = localStorage.getItem(GUARDA);
    if (!raw) return {};
    const { dados, em } = JSON.parse(raw);
    if (!dados || Date.now() - em > VALIDADE_MS) {
      localStorage.removeItem(GUARDA);
      return {};
    }
    return dados;
  } catch {
    return {};
  }
}

// Cookie _fbc do pixel. Formato: fb.<subdomainIndex>.<timestamp>.<fbclid>
function cookieFbc() {
  try {
    const m = document.cookie.match(/(?:^|;\s*)_fbc=([^;]+)/);
    return m ? decodeURIComponent(m[1]) : null;
  } catch {
    return null;
  }
}

function fbclidDoCookie(c) {
  if (!c) return null;
  const p = c.split(".");
  return p.length >= 4 ? p.slice(3).join(".") : null;
}

// Junta o que foi guardado com o cookie, sem misturar cliques diferentes:
// o cookie só entra se não houver fbclid guardado ou se for o mesmo clique.
function dadosAtuais() {
  const dados = { ...lerGuardado() };
  const c = cookieFbc();
  const fbclidCookie = fbclidDoCookie(c);

  if (c && fbclidCookie && (!dados.fbclid || dados.fbclid === fbclidCookie)) {
    if (!dados.fbc) dados.fbc = c;
    if (!dados.fbclid) dados.fbclid = fbclidCookie;
  }
  return dados;
}

// Chamar UMA vez, antes de renderizar o app (ver main.jsx).
// Se a pessoa chegou com parâmetros na URL, guarda; senão mantém o que já havia.
export function capturarTracking() {
  try {
    const q = new URLSearchParams(window.location.search);
    const achou = {};
    CHAVES.forEach((k) => {
      const v = q.get(k);
      if (v) achou[k] = v;
    });
    if (Object.keys(achou).length) {
      localStorage.setItem(
        GUARDA,
        JSON.stringify({ dados: achou, em: Date.now() })
      );
    }
  } catch {
    // localStorage bloqueado (modo privado, etc.): segue só com o cookie
  }
}

// Recebe uma URL e, se for da Eurekha, devolve ela com os parâmetros anexados.
// Não sobrescreve parâmetro que já esteja no link. Outros domínios passam intactos.
export function withTracking(url) {
  if (!url) return url;
  try {
    const u = new URL(url);
    if (!u.hostname.endsWith("eurekha.com.br")) return url;

    const dados = dadosAtuais();
    CHAVES.forEach((k) => {
      if (dados[k] && !u.searchParams.has(k)) u.searchParams.set(k, dados[k]);
    });
    return u.toString();
  } catch {
    return url;
  }
}
