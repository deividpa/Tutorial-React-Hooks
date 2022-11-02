import React, { useState, useEffect } from "react";

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  function Pokemon({ avatar, name, id }) {
    return (
      <figure>
        <img src={avatar} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    );
  }

  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      console.log(json);

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();

        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.back_shiny,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  // useEffect(() => {
  //   let url = "https://pokeapi.co/api/v2/pokemon/";
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       //console.log(json);
  //       json.results.forEach((el) => {
  //         fetch(el.url)
  //           .then((res) => res.json())
  //           .then((json) => {
  //             //console.log(json);
  //             let pokemon = {
  //               id: json.id,
  //               name: json.name,
  //               avatar: json.sprites.front_default,
  //             };
  //             setPokemons((pokemons) => [...pokemons, pokemon]);
  //           });
  //       });
  //     });
  // }, []);

  return (
    <>
      <h2>Peticiones Asincrónicas Con Hooks</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((el) => {
          return (
            <Pokemon key={el.id + "a"} name={el.name} avatar={el.avatar} />
          );
        })
      )}
    </>
  );
}
