import React from "react";
import a11y from "../assets/a11y.svg";
import blueFlagSvg from "../assets/blue-flag.svg";

const Beach = ({ data }) => {
  const disabilityAccess = data.properties.Acceso_dis === "Sí";
  const blueFlag = data.properties.Bandera_az === "Sí";

  return (
    <div className="beach">
      <article key={data.properties.OBJECTID}>
        <h3>{data.properties.Nombre}</h3>
        <div className="picture">
          {blueFlag && (
            <picture>
              <img className="blue-flag" src={blueFlagSvg} alt="blue flag" />
            </picture>
          )}
          {disabilityAccess && (
            <picture>
              <img className="disability" src={a11y} alt="accesible" />
            </picture>
          )}
        </div>

        <dl>
          <dt>Municipio</dt>
          <dd>{data.properties.Término_M}</dd>
          <dt>Acceso de discapacidad</dt>
          <dd>{data.properties.Acceso_dis}</dd>
          <dt>Tipo de Arena</dt>
          <dd>{data.properties.Tipo_de_ar}</dd>
          <dt>Bandera azul</dt>
          <dd>{data.properties.Bandera_az}</dd>
          <dt>Forma de accesso</dt>
          <dd>{data.properties.Forma_de_a}</dd>
          <dd>{data.properties.Observacio}</dd>
        </dl>
      </article>
    </div>
  );
};

export default Beach;
