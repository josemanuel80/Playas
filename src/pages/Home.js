import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Home.css';

export const Home = () => {
  const [city, setCity] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    history.push(`/results/${city.toLowerCase()}`);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.currentTarget.value;
    setCity(value);
  };

  return (
    <div className="HomeMain">
      <div className="inicio">
        <a href="http://josemanuelcastellano.com">Inicio</a>
      </div>
      <section className="container">
        <h2>BUSCADOR DE PLAYAS</h2>
        <br></br>
        <form
          className="buscador"
          method="get"
          action="/"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Ciudad costera"
            className="input"
            name="city"
            value={city}
            onChange={handleChange}
          />
          <button className="submit" onClick={handleSubmit}>
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
};
