import styles from "./ingressos.module.css";

import ingressos from "../../assets/imgs/ingressos/opcoes-online-ao-vivo.jpg";

import { IoMdCart } from "react-icons/io";

import Title from "../Title";

export default function Ingressos() {
  return (
    <div id="ingresso" className={styles.container}>
      <Title text={"INGRESSOS"} />
      <div className={styles.img} data-aos="zoom-in">
        <img src={ingressos} alt="Ingressos" />
      </div>
      <div className={styles.boxesTexts}>
        <div className={styles.box} data-aos="zoom-in">
          <h3>Ingresso Congresso Conecte Autismo 2024 Online - AO VIVO</h3>
          <ul>
            <li>Online AO VIVO: Apenas R$ 299,90</li>
            <li>Acesso AO VIVO a todas as sessões do congresso.</li>
            <li>Certificado de 60 Horas após o término do evento.</li>
            <li>
              Conteúdo gravado disponível por 24 meses para revisão e
              aprendizado contínuo.
            </li>
            <li>
              Plataforma Zoom com garantia de validação de acesso e qualidade.
            </li>
            <li>Suporte em Libras, garantindo acessibilidade e inclusão.</li>
            <li>
              Opção de escolher entre duas salas de transmissão: Conect Autismo
              e Espaço Conect Autismo.
            </li>
            <li>
              Acesso exclusivo à pré-venda antecipada do Conect Autismo 2025 em
              Novembro de 2024.
            </li>
          </ul>
          <a
            href="https://go.hotmart.com/B89195964H?ap=54b0"
            target="_blank"
            className={styles.button}
          >
            <IoMdCart /> R$ 299,90
          </a>
        </div>

        <div className={styles.box} data-aos="zoom-in">
          <h3>Festa Pré Conet Autismo Praia do Futuro</h3>
          <ul>
            <li>Festa Pré Conect Autismo</li>
            <li>23/08/2024 em Fortaleza CÉ</li>
            <li>Open Bar</li>
            <li>Jantar Delicioso</li>
            <li>Festa</li>
            <li>Local Aconchegante</li>
            <li>Bate-Papo</li>
            <li>Show AO VIVO</li>
            <li>Local acessível</li>
            <li>Som e Iluminação 50%</li>
          </ul>
          <a
            href="https://go.hotmart.com/B89195964H?ap=e161"
            target="_blank"
            className={styles.button}
          >
            <IoMdCart />
            R$ 224,90
          </a>
        </div>
      </div>
    </div>
  );
}
