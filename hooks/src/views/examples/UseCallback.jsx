import React, { useCallback } from "react";
import { useState } from "react/cjs/react.development";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import UseCallbackButtons from "./UseCallbackButtons";

const UseCallback = (props) => {
  const [count, setCount] = useState(0);

 const inc = useCallback(
    function (delta) {
        setCount(current => current + delta);
    },[setCount]
  )

//   function inc(delta) {
//       setCount(count + delta);
//   }

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />

      <SectionTitle title="Exercício #1" />
      <div className="center">
        <span className="text">{count} </span>
        <UseCallbackButtons inc={inc}/>
      </div>
    </div>
  );
};

export default UseCallback;
