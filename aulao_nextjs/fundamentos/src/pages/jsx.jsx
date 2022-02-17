function Jsx() {
    const titulo = "JSX é um conceito Central"
    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }
    const a = 19
    const b = 34
    console.log(a * b)
    const objeto = {
        nome: "Plinio",
        telefone: "985657381"
    }
  return (
    <>
      <h1>{titulo}</h1>
      {subtitulo()}
      <h2>{a}</h2>
      <h2>{b}</h2>
      <h2>{a * b}</h2>
      <h3>{JSON.stringify(objeto)}</h3>
    </>
  );
}

export default Jsx;
