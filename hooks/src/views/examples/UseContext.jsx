import React, { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";
import { AppContext } from "../../data/Store";

const UseContext = (props) => {
  const context = useContext(DataContext); //Pode ser desestruturado para ficar mais simples pegando os dois atributos

  function addNumber(delta) {
    context.setState({
      ...context.state,
      number: context.state.number + delta, //Alterar apena o atributo number do objeto
    });
  }

  const { number, text, setNumber } = useContext(AppContext);

 

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
          <button className="btn" onClick={() => addNumber(-1)}>
            -1
          </button>
          <button className="btn" onClick={() => addNumber(+1)}>
            +1
          </button>
        </div>
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <span className="text">{text}</span>
        <span className="text">{number}</span>
        <div>
          <button className="btn" onClick={() => setNumber(number - 1)}>-1</button>
          <button className="btn" onClick={() => setNumber(number + 1)}>+1</button>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
