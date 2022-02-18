// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    name: "Teste API",
    method: req.method,
    nome: req.query.nome,
    code: +req.query.cod //Se quiser que seja um numero basta colocar o + para transformar em número
   });
}
