import React, { useState } from "react";

export default function ContadorHooks(props) {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <>
      <h2>Hooks - useState Concepts</h2>
      <div>
        <h3>Contador: {contador}</h3>
        <button onClick={sumar}>Aumentar</button>
        <button onClick={restar}>Disminuir</button>
        <span>{props.titulo}</span>
      </div>
    </>
  );
}

ContadorHooks.defaultProps = {
  titulo: "Contador de clicks",
};
