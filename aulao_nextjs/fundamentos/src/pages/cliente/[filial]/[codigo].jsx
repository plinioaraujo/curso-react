import Layout from "../../../components/Layout";
import { useRouter } from "next/router";

const ClientePorCodigo = () => {
    const router = useRouter();
    return ( 
        <>
          <Layout titulo="Navegação Dinâmica">
            <div>
              <p style={{fontSize:'28px'}}>Filial: <strong>{router.query.filial}</strong></p>
              <p>Código: <strong>{router.query.codigo}</strong></p>
            </div>
          </Layout>  
        </>
     );
}
 
export default ClientePorCodigo;