import React from "react";
import Button from "../BOTAO/Button";
import style from "./Header.module.css";

const Header = () => {
  const { buttaozinho, cabecalho,  textoHeader, ponta,  Ponta } = style;

  return (
    <div className={cabecalho}>
      <div className={textoHeader}>
        <p 
          style={{
            fontSize: "1.25em",
            fontWeight: "200",
            marginBottom: "0.5em",
            padding: "0.1em",
          }}
        >
          uma seleção de produtos
        </p>

        <h1
          style={{
            fontSize: "2.5em",
            fontWeight: "600",
            marginBottom: "0.5em",
            padding: "0.1em",
          }}
        >
          especial para você
        </h1>

        <p style={{ fontSize: "1em", fontWeight: "300", padding: "0.1em" }}>
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </p>
      </div>

      <div className={buttaozinho}>
        <Button type="primary" text="Conheça a Linx" href="#" />
        <Button
          type="primary"
          text="Ajude o algorítimo"
          href="#ajude-o-algoritmo"
        />
        <Button type="primary" text="Seus produtos" href="#produtos" />
        <Button type="primary" text="Compartilhe" href="#compartilhe" />
      </div>

      <div className={Ponta}>
        <div className={ponta}></div>
      </div>
    </div>
  );
};

export default Header;
