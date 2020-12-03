import React, { useState, useEffect } from 'react';
import Frase from './components/Frase';

import styled from '@emotion/styled';

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

const Boton = styled.button`
  background-image: linear-gradient(to left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  cursor: pointer;
`;

function App() {

  // state de frases
  const [frase, guardarFrase] = useState({});

  const consultarApi  = async () =>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    guardarFrase(frase[0])
  }

  // cargar una frase

  useEffect( () => {
    consultarApi()
  }, []);


  return (
    <Contenedor className="App">
      <Frase 
        frase={frase}
      />
      <Boton 
        onClick={consultarApi}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
