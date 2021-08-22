import { useParams } from 'react-router-dom';
import { getAllBeaches } from '../lib/fetch';
import { useEffect, useState } from 'react';
import { Beach } from '../components/Beach.js';
import '../styles/Beach.css';

export const Results = () => {
  const [beachToRender, setBeachToRender] = useState([]);
  const [loading, setloading] = useState(true);

  // Obtiene la ciudad por params.
  const { city } = useParams();

  // Filtra las playas para obtener la buscada.
  const getBeaches = (beaches, string) => {
    return beaches.filter((beach) => {
      return beach.properties.Término_M.toLowerCase().includes(string);
    });
  };

  // Obtiene el fetch de las playas y las manda por hook para retornar.
  const allBeaches = async () => {
    const fetchAllBeaches = await getAllBeaches();
    const beachesToShow = getBeaches(fetchAllBeaches, city);
    setloading(false);
    setBeachToRender(beachesToShow);
  };

  useEffect(() => {
    allBeaches();
  });

  return (
    <>
      <h2>Se han encontrado {beachToRender.length} playas</h2>
      {loading && <h3>Cargando base de datos.</h3>}
      <div className="main">
        {beachToRender.map((e) => {
          return <Beach key={e.properties.OBJECTID} data={e} />;
        })}
      </div>
    </>
  );
};
