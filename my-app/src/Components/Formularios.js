import React, { useState } from "react";

export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  return (
    <>
      <h2>Uso de Formularios</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Submit realizado");
        }}
      >
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <h4>Seleccionar País</h4>
        <label htmlFoR="colombia">Colombia</label>
        <input
          type="radio"
          id="colombia"
          value="colombia"
          name="pais"
          onChange={(e) => {
            setPais(e.target.value);
          }}
        />
        <label htmlFoR="argentina">Argentina</label>
        <input
          type="radio"
          id="argentina"
          value="Argentina"
          name="pais"
          onChange={(e) => setPais(e.target.value)}
          defaultChecked
        />
        <label htmlFoR="ecuador">Ecuador</label>
        <input
          type="radio"
          id="ecuador"
          name="pais"
          value="Ecuador"
          onChange={(e) => setPais(e.target.value)}
        />
        <hr />
        <select name="lenguajes" onChange={(e) => setLenguaje(e.target.value)}>
          <option id="espaniol" value="espaniol">
            español
          </option>
          <option id="ingles" value="ingles">
            ingles
          </option>
          <option id="mandarin" value="mandarin">
            mandarin
          </option>
          <option id="ruso" value="ruso">
            ruso
          </option>
        </select>
        <hr />
        <label htmlFor="terminos">Acepto términos y condiciones: </label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
        />
        <input type="submit" />
      </form>
    </>
  );
}
