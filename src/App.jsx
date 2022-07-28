import "./styles/App.css";
import { useEffect, useState } from "react";
import INPUTS from "./components/INPUTS/Input";
import FORMULARIO from "./components/FORMULARIO/Form";
import PRODUTO from "./components/PRODUTO/Product";
import TITULO from "./components/TITULO/Title";
import BOTAO from "./components/BOTAO/Button";
import CABECALHO from "./components/CABECALHO/Header";
import RODAPE from "./components/RODAPE/Footer";

function App() {
  const [productsList, setProductList] = useState([]);
  const [page, setPage] = useState(
    "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1"
  );

  /*
    Requests the products page
    iterates over to the next page each time its called.
  */
  const requestPage = async () => {
    const response = await fetch(page);
    const json = await response.json();

    const { products, nextPage } = json;

    const newProductList = products.map((element) => (
      <PRODUTO key={Math.random() * 255} productData={element} />
    ));

    setPage(`https://${nextPage}`);
    setProductList([...productsList, ...newProductList]);

    // console.log(page)
    // console.log(nextPage)
    // console.log(products)
  };

  useEffect(() => {
    requestPage();
  }, []);

  return (
    <div className="App">
      <CABECALHO />

      <section className="form-section" id="ajude-o-algoritmo">
        <FORMULARIO />
      </section>

      <section className="produtos-section" id="produtos">
        <TITULO text="Sua seleção especial" />

        <div className="product-grid">{productsList}</div>

        <BOTAO
          type="secondary"
          text="Ainda mais produtos aqui!"
          clickHandler={requestPage}
        />
      </section>

      <section className="newsletter-section" id="compartilhe">
        <TITULO text="Compartilhe a novidade" />

        <p style={{ margin: "50px" }}>
          Quer que seus amigos também ganhem a lista personalizada deles?
          Preencha agora!
        </p>

        <form className="newsletter-form">
          <div className="newsletter-input-container">
            <INPUTS label="Nome do seu amigo:" id="nomeAmigo" />
            <INPUTS label="E-mail:" id="emailNewsletter" type="email" />
          </div>

          <BOTAO type="secondary" text="Enviar agora" />
        </form>
      </section>
      <RODAPE />
    </div>
  );
}

export default App;
