import React, { useState, useEffect } from "react";

export default function ScrollHooks(props) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("Fase de montaje");

    const detectarScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", detectarScroll);
  });

  return (
    <>
      <h2>Hooks useEffect y el ciclo de vida con Hooks</h2>
      <p>Scroll Y del navegador {scrollY}px </p>
    </>
  );
}
