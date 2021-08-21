import React from 'react';
import '../styles/Beach.css';

export const Beach = ({ data }) => {
  console.log(data);
  return (
    <div className="Beach">
      <article key={data.properties.OBJECTID}>
        <h3>{data.properties.Nombre}</h3>
        <dt>Municipio</dt>
        <dd>{data.properties.Término_M}</dd>
        <dt>Forma de acceso</dt>
        <dd>{data.properties.Forma_de_a}</dd>
        <dt>Acceso para discapacitados</dt>
        <dd>{data.properties.Acceso_dis}</dd>
        <dt>Bandera azul</dt>
        <dd>{data.properties.Bandera_az}</dd>
        <dt>Observaciones</dt>
        <dd>{data.properties.Observacio}</dd>
      </article>
    </div>
  );
};
