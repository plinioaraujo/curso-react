import Cabecalho from '../components/Cabecalho'
import Layout from '../components/Layout'
const App = () => {
    return ( 
        <>
          <Layout titulo="Exemplo de CSS Modularizado">
              <Cabecalho titulo="Next.js & React"></Cabecalho>
              <Cabecalho titulo="Aprende Next na prática"></Cabecalho>
          </Layout>
        </>
     );
}
 
export default App;