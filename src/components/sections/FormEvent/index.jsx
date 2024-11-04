import styles from "./formEvent.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../../assets/imgs/logo/logo-png.png";

export default function FormEvent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    fbq("track", "lead", {
      name,
      email,
      number,
    });

    navigate("/confirmation");
  }

  return (
    <section id="formEvent">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img loading="lazy" src={logo} alt="Logo Conect Autismo" />
          </div>
          <h1>PRÉ-VENDA LOTE PROMOCIONAL. </h1>
          <p>
            Se inscreva pra ter acesso a pré-venda exclusiva do lote promocial
            limitado conect 2025.
          </p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Digite seu número"
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">QUERO ME CONECTAR</button>
        </form>
      </div>
    </section>
  );
}
