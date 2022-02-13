import React, { useContext } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";

const UseContext = (props) => {
  const context = useContext(DataContext); //Pode ser desestruturado para ficar mais simples pegando os dois atributos

  function addNumber(delta) {
      context.setState({
          ...context.state,
          number: context.state.number + delta //Alterar apena o atributo number do objeto
      })
  }

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{context.state.number}</span>
        <span className="text">{context.state.text}</span>
        <div>
            <button className="btn" onClick={() => addNumber(-1)}>-1
            </button>
            <button className="btn" onClick={()=> addNumber(+1)}>+1</button>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
