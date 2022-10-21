import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("Moviendo el scroll");
    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);

    return () => window.removeEventListener("scroll", detectarScroll);
  }, [scrollY]);

  //Cuando se le pasa una variable de esto que queramos estar controlando "scrollY", este useEffect se ejecutará ccada vez que cambie
  // useEffect(() => {
  //   console.log("Fase de Montaje");
  // }, [scrollY]);

  //Si necesitamos que una peticion, como una API externa solamente se ejecute una sola vez, se recomienda dejar la lista de dependencias (El arreglo) vacío
  useEffect(() => {
    console.log("Fase de Montaje");
  }, []);

  //Un use effect que no tiene definida la lista de dependencias es como un ComponentDidUpdate
  useEffect(() => {
    console.log("Fase de Actualizacion");
  });

  //Fase de desmontaje
  useEffect(() => {
    return () => {
      console.log("Fase de Desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - useEffect y el Ciclo de vida</h2>
      <p>Scroll Y del Navegador {scrollY}px</p>
    </>
  );
}
