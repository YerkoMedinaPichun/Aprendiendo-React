import React, { useState } from "react";

//Version avanzada
export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    //spread operator
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  // const [nombre, setNombre] = useState("");
  // const [sabor, setSabor] = useState("");
  // const [lenguaje, setLenguaje] = useState("");
  // const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          // defaultValue="Escribe tu nombre"
        />
        <p>Elige tu Sabor JS Favorito:</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChange}
          // checked
          defaultChecked
        />
        <label htmlFor="vanilla">Vanilla</label>

        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>

        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>

        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>

        <input
          type="radio"
          id="svelte"
          name="sabor"
          value="svelte"
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>

        <p>Elige tu lenguaje de programaci??n favorito</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="js">
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto t??rminos y condiciones</label>
        <input
          type="checkbox"
          name="terminos"
          id="terminos"
          onChange={handleChecked}
        />
        <br />

        <input type="submit" />
      </form>
    </>
  );
}

//Para formularios peque??os

// export default function Formularios() {
//   const [nombre, setNombre] = useState("");
//   const [sabor, setSabor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("El formulario se ha enviado");
//   };

//   return (
//     <>
//       <h2>Formularios</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nombre">Nombre: </label>
//         <input
//           type="text"
//           id="nombre"
//           name="nombre"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//           // defaultValue="Escribe tu nombre"
//         />
//         <p>Elige tu Sabor JS Favorito:</p>
//         <input
//           type="radio"
//           id="vanilla"
//           name="sabor"
//           value="vanilla"
//           onChange={(e) => setSabor(e.target.value)}
//           // checked
//           defaultChecked
//         />
//         <label htmlFor="vanilla">Vanilla</label>

//         <input
//           type="radio"
//           id="react"
//           name="sabor"
//           value="react"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="react">React</label>

//         <input
//           type="radio"
//           id="angular"
//           name="sabor"
//           value="angular"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="angular">Angular</label>

//         <input
//           type="radio"
//           id="vue"
//           name="sabor"
//           value="vue"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="vue">Vue</label>

//         <input
//           type="radio"
//           id="svelte"
//           name="sabor"
//           value="svelte"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="svelte">Svelte</label>

//         <p>Elige tu lenguaje de programaci??n favorito</p>
//         <select
//           name="lenguaje"
//           onChange={(e) => setLenguaje(e.target.value)}
//           defaultValue="js"
//         >
//           <option value="">---</option>
//           <option value="js">JavaScript</option>
//           <option value="php">PHP</option>
//           <option value="py">Python</option>
//           <option value="go">GO</option>
//           <option value="rb">Ruby</option>
//         </select>
//         <br />
//         <label htmlFor="terminos">Acepto t??rminos y condiciones</label>
//         <input
//           type="checkbox"
//           name="terminos"
//           id="terminos"
//           onChange={(e) => setTerminos(e.target.checked)}
//         />
//         <br />

//         <input type="submit" />
//       </form>
//     </>
//   );
// }
