import styles from '../styles/Navegador.module.css'
import Link from "next/link";
function Navegador(props) {
  return (
    <>
      <Link href={props.destino}>
        <div 
            className={styles.navegador} 
            style={{
                backgroundColor: props.cor ?? 'dodgerblue'
            }}
        >
            {props.texto}
        </div>
      </Link>
    </>
  );
}

export default Navegador;
