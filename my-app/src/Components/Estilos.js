import React from "react";
import "./Estilos.css";
import moduleStyles from "./Estilos.module.css";
import "./Estilos.scss";

export default function Estilos() {
  return (
    <section className="estilos">
      <h2>Uso de Estilos CSS por medio de React</h2>
      <h3 className="bg-react">Estilos en hoja CSS externa</h3>
      <h3
        style={{
          borderRadius: "20px",
          display: "inline-block",
          margin: "1rem",
          padding: "10px",
          backgroundColor: "#F80",
        }}
      >
        Estilos en línea
      </h3>
      <h3 className={moduleStyles.error}>Estilos con modulos</h3>
      <h3 className={moduleStyles.success}>Estilos con modulos</h3>
      <h3 className="bg-sass">Estilos mediante Sass</h3>
    </section>
  );
}
