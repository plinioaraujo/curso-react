import Navegador from "../components/Navegador";

function Inicio() {
  return (
    <>
      <div style={{
        display:'flex',        
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100vh',       
      }}>
        <Navegador destino="/estiloso" texto="Estiloso"></Navegador>
        <Navegador destino="/app" texto="Exemplo muito legal" cor="#5800af55"></Navegador>
        <Navegador destino="/jsx" texto="JSX" cor="crimson"></Navegador>
        <Navegador destino="/navegacao" texto="Navegação" cor="green"></Navegador>
        <Navegador destino="/cliente/rj/123" texto="Navegação #02" cor="darkorange"></Navegador>
     
      </div>
    </>
  );
}

export default Inicio;
