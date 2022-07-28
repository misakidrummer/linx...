import React from "react";
import Button from "../BOTAO/Button";
import style from "./Product.module.css";

const Product = ({ productData }) => {
  const { mockupImg, produtos, preco, infoContainer } = style;
  const { name, image, oldPrice, price, description, installments } =
    productData;
 

  return (
    <div className={produtos}>
      <img className={mockupImg} src={image}></img>

      <div className={infoContainer}>
        <div>
          <span style={{ fontWeight: "500" }}>{name}</span>
          <p style={{ fontSize: "12px" }}>{description}</p>
        </div>

        <div className={preco}>
          <span>De: R${oldPrice}</span>
          <h4>Por: R${price}</h4>
          <span>
            ou {installments.count}x de R${installments.value}
          </span>
        </div>

        <Button type="secondary" text="Comprar" />
      </div>
    </div>
  );
};

export default Product;
