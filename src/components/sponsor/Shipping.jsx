import styles from "./sponsor.module.css";

const Shipping = () => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Envio de Mercadorias</h1>

    <h3 className={styles.subSectionTitle}>Sobre o Envio</h3>
    <p className={styles.sectionText}>
      Todas as mercadorias destinadas à exposição devem seguir as normas abaixo
      para garantir a correta entrega e conformidade com as exigências do
      evento.
    </p>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Embalagens devem identificar claramente: nome do evento, nome do
        expositor e finalidade.
      </li>
      <li className={styles.listItem}>
        O expositor é responsável por emitir notas fiscais conforme os
        procedimentos legais e recolher encargos devidos.
      </li>
      <li className={styles.listItem}>
        Não é permitida a entrada de equipamentos ou produtos sem nota fiscal.
      </li>
      <li className={styles.listItem}>
        O expositor deve agendar entrega e retirada de produtos, garantindo a
        presença de um representante no stand.
      </li>
      <li className={styles.listItem}>
        O evento não disponibiliza equipamentos ou profissionais para transporte
        interno de materiais.
      </li>
    </ul>

    <h3 className={styles.subSectionTitle}>
      Regras para Emissão de Nota Fiscal
    </h3>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Notas fiscais devem indicar o local do evento como destino ou local de
        entrega.
      </li>
      <li className={styles.listItem}>
        Devem ser emitidas em nome do expositor, com CNPJ e Inscrição Estadual
        do contrato.
      </li>
      <li className={styles.listItem}>
        Notas com CNPJ diferente do contrato podem resultar em retenção dos
        produtos até o pagamento de impostos à Secretaria de Fazenda do Estado.
      </li>
      <li className={styles.listItem}>
        No corpo da nota ou em "Informações Complementares", incluir: "As
        mercadorias destinam-se à exposição..." seguido do nome completo do
        evento e período.
      </li>
      <li className={styles.listItem}>
        Discriminar quantidades, valores unitários e totais dos produtos.
      </li>
    </ul>
    <p className={styles.sectionText}>
      <strong>Nota:</strong> A organizadora não se responsabiliza por conferir
      itens, quantidades ou integridade dos materiais enviados. Materiais sem
      identificação correta ou com divergências não serão recebidos.
    </p>

    <h3 className={styles.subSectionTitle}>Material para Stand e Pasta</h3>
    <p className={styles.sectionText}>
      Expositores com contrapartida em seu contrato devem enviar materiais
      conforme as datas e especificações abaixo:
    </p>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <strong>Material para Stand:</strong> 22/08/2025, das 14:00 às 18:00.
      </li>
      <li className={styles.listItem}>
        <strong>Material para Pasta:</strong> 11/08/2025, das 08:00 às 18:00.{" "}
        <br />
        <span>Após esta data, materiais para pastas não serão aceitos.</span>
      </li>
    </ul>
    <p className={styles.sectionText}>
      Identifique os materiais conforme o modelo:
    </p>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Conect Autismo 2025 <br />
        Nome do Expositor <br />
        Material para [Stand/Pasta] <br />
        Washington Soares, 999, Bairro Edison Queiroz, 60182-508, Fortaleza, CE,
        Brasil
      </li>
      <li className={styles.listItem}>
        Separe e identifique: <br />
        1. Material para Pasta <br />
        2. Material para Stand - Número do Stand
      </li>
    </ul>
  </div>
);

export default Shipping;
