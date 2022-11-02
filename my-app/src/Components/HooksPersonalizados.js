import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export default function HooksPersonalizados() {
  let url = "https://pokeapi.co/api/v2/pokemon/";

  const { data, isPending, error } = useFetch(url);
  //console.log(useFetch());
  return (
    <>
      <h2>Hooks Personalizados</h2>
      <h3>{JSON.stringify(data)}</h3>
      <h3>
        <mark>{JSON.stringify(isPending)}</mark>
      </h3>
      <h3>
        <pre>
          <code>{JSON.stringify(error)}</code>
        </pre>
      </h3>
    </>
  );
}
