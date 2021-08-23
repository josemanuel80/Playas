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
      <section className="container">
        <h2>BUSCADOR DE PLAYAS</h2>
        <br></br>
        <form method="get" action="/" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ciudad costera"
            className="input"
            name="city"
            value={city}
            onChange={handleChange}
          />
        </form>
      </section>
    </div>
  );
};
