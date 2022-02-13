import React from "react";
import { useReducer } from "react/cjs/react.development";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const initialState = {
  cart: [{}],
  products: [{}, {}],
  user: null,
  //foco....
  number: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case "number_add2":
      return { ...state, number: state.number + 2 }
    case "login":
      return { ...state, user: { name: action.payload } }
    case "number_multi7":
      return { ...state, number: state.number * 7 }
    case "number_div25":
      return { ...state, number: state.number / 25 }
    case "number_parseInt":
      return { ...state, number: parseInt(state.number) }
    case "number_AddN":
      return { ...state, number: state.number + action.payload }
    default:
      return state
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}
        <span className="text">{state.number}</span>
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "Maria" })}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_multi7" })}
          >
            Multi 7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_div25" })}
          >
            Divide por 25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_parseInt" })}
          >
            Parse Int
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_AddN", payload: -9 })}
          >
           -9
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_AddN", payload: 11 })}
          >
           -11
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_add2" })}
          >
            +2
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
