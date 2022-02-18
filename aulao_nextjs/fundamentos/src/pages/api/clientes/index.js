function handler(req,resp) {
//  resp.status(204).send()
 

 if(req.method === 'GET'){
     handleGet(req,resp)
 }else{
     resp.status(405).send()
 }

 function handleGet(req, resp) {
    resp.status(200).json({
        nome: 'João',
        dados: {
            endereco: "Rua Teste",
            bairro: 'Centro'
        }
    })
 }

}
 
export default handler;