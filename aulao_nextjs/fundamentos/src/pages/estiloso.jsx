import Styles from "../styles/Estiloso.module.css";
import Link from "next/link";
import Layout from "../components/Layout";

function Estiloso() {
  return (
    <>
      <Layout titulo="Exemplo de css modularizado">
        <div className={Styles.roxo}>
         
          <h1>estilo usando CSS módulos</h1>
        </div>
      </Layout>
    </>
  );
}

export default Estiloso;
