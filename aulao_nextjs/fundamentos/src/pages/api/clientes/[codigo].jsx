const handler = (req, res) => {
    const codigo = req.query.codigo
    return ( 

        <>
            {res.status(200).json({
               id: codigo,
                nome:  `Maria ${codigo}`,
                email: `mariamariamaria${codigo}@maria.com.br`
            })}
        </>

     );
}
 
export default handler;