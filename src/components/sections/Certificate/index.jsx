import styles from "./certificate.module.css";
import Title from "../../shared/Title";
import ButtonPretty from "../../shared/ButtonPretty";

import { IoMdClose } from "react-icons/io";

import { useState } from "react";

function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, "");

  if (cpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0;
  let resto;

  // primeiro dígito
  for (let i = 1; i <= 9; i++)
    soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;

  // segundo dígito
  soma = 0;
  for (let i = 1; i <= 10; i++)
    soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11))) return false;

  return true;
}

const Modal = ({ setClose }) => {
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    console.log("clicou para fechar");
    setClose(false);
  };

  const submiseForm = (e) => {
    e.preventDefault();

    if (!validarCPF(cpf)) {
      setError("CPF inválido. Verifique e tente novamente.");
      return;
    }

    setError("");
    console.log("CPF válido:", cpf);

    window.open(
      "https://drive.google.com/drive/folders/1RruTsWw5F0avnQWB8drVqbUNPaUWLxEq?usp=sharing",
      "_blank"
    );

    // se quiser fechar o modal depois
    setClose(false);
  };

  return (
    <div className={styles.containerModal}>
      <div className={styles.modal}>
        <button className={styles.buttonClose} onClick={handleClose}>
          <IoMdClose />
        </button>
        <h3>Digite seu CPF para continuar:</h3>
        <p>
          Para emitir seu certificados precisamos conferir no nosso banco de
          dados seu documento.
        </p>

        <form onSubmit={submiseForm}>
          <input
            type="number"
            placeholder="Digite seu CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            maxLength={14}
          />
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.buttons}>
            <button
              className={styles.buttonCancel}
              type="button"
              onClick={handleClose}
            >
              Cancelar
            </button>
            <button type="submit">Pronto</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function Certificate() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <Title text="EMITA SEU CERTIFICADO " />
        <div className={styles.backgroundOverlay}></div>
        <div className={styles.boxes} data-aos="zoom-in">
          <div className={styles.boxInfo}>
            {/* <h3>EMITA AGORA SEU CERTIFICADO CONECT 2025</h3> */}
            <p className={styles.subtitle}>Te vejo no Conect Autismo 2026!</p>
            <ul className={styles.highlight}>
              <li>
                <span>PARTICIPOU</span>
                <p>Do Conect Autismo 2025</p>
              </li>
              <li>
                <span>GARANTA</span>
                <p>Seu certificado de participação</p>
              </li>
              <li>
                <span>VALIDADE</span>
                <p>Certificado com validade nacional</p>
              </li>
              <li>
                <span>PRÓXIMO EVENTO</span>
                <p>Te vejo no Conect Autismo 2026!</p>
              </li>
            </ul>
            <div className={styles.text}>
              Todos os participantes do Conect Autismo 2025 têm direito a
              receber seu certificado de participação. Emita agora mesmo o seu
              documento e garanta o comprovante desta experiência enriquecedora.
            </div>
            <div className={styles.button}>
              <ButtonPretty
                // link="https://drive.google.com/drive/folders/1RruTsWw5F0avnQWB8drVqbUNPaUWLxEq?usp=sharing"
                // target="_blank"
                onClick={() => setShowModal(true)}
                text="Emitir Certificado"
              />
            </div>
          </div>
        </div>
      </div>
      {showModal && <Modal setClose={setShowModal} />}
    </>
  );
}
