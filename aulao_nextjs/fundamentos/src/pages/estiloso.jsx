import Styles from "../styles/Estiloso.module.css";

import Layout from "../components/Layout";

function Estiloso() {
  return (
    <>
      <Layout titulo="Exemplo de css modularizado Estiloso">
        <div className={Styles.roxo}>
          <h1>estilo usando CSS módulos</h1>
        </div>
      </Layout>
    </>
  );
}

export default Estiloso;
