import React from "react";
import Button from "../BOTAO/Button";
import RadioInput from "../INPUTS/RadioInput";
import Input from "../INPUTS/Input";
import style from "./Form.module.css";
 
const formulario = () => {
  const { componente, texto,  formulas,  quadrado } = style;
 
  return (
    <div className={componente}>
      <div className={texto}>
        <h2 class="ajude"
        style={{ marginBottom: "2em" }}>
          Ajude o algorítimo a ser mais certeiro
        </h2>

        <p style={{ fontSize: "16px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris
          rhoncus erat sed interdum dignissim. Suspendisse semper pretium
          consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus
          quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia
          euismod augue vel egestas. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel
          urna tortor. Vivamus et arcu non felis tristique eleifend.
          <br />
          <br />
          <br />
          Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum
          ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed,
          egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut
          neque mattis, consequat velit ut, ultrices orci. Nulla varius
          elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra,
          magna ac luctus commodo, odio ante suscipit libero, at mattis augue
          est vel metus.
        </p>
      </div>
 
      <form className={formulas}>
        <Input label="Seu nome:" id="inputName" />
        <Input label="E-mail:" id="inputEmail" type="email" />
        <Input label="CPF:" id="inputCPF" pattern="^[0-9]{11}$" />

        <div className={quadrado}>
          <RadioInput value="Masculino" />
          <RadioInput value="Feminino" />
        </div>
 
        <Button type="secondary" text="Enviar" />
      </form>
    </div>
  );
};

export default formulario;
