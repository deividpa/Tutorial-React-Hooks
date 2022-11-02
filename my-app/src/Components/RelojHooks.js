import React, { useState, useEffect } from "react";

function Reloj({ hora }) {
  return <h3>{hora}</h3>;
}

export default function RelojHooks() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1500);
    } else {
      clearInterval(temporizador);
    }

    return console.log("Fase de desmontaje");
  }, [visible]);

  return (
    <>
      <h2>El reloj con Hooks</h2>
      {visible && <Reloj hora={hora} />}
      <button onClick={() => setVisible(true)}>Iniciar</button>
      <button onClick={() => setVisible(false)}>Detener</button>
    </>
  );
}
