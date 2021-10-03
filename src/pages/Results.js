import { useParams } from 'react-router-dom';
import { getAllBeaches } from '../lib/fetch';
import { useEffect, useState } from 'react';
import { Beach } from '../components/Beach.js';
import { useHistory } from 'react-router-dom';

import '../styles/results.css';
import '../styles/Beach.css';

export const Results = () => {
  const [beachToRender, setBeachToRender] = useState([]);
  const [text, setText] = useState('');
  const history = useHistory();
  const { city } = useParams();

  const getBeaches = (beaches, string) => {
    return beaches.filter((beach) => {
      const result = beach.properties.Término_M.toLowerCase().includes(string);
      return result;
    });
  };
  const allBeaches = async () => {
    const fetchAllBeaches = await getAllBeaches();
    const beachesToShow = getBeaches(fetchAllBeaches, city);
    if (beachesToShow.length === 0) {
      setText(
        'Asegurese de haber escrito bien el nombre de la ciudad y de que la ciudad sea costera',
      );
    }
    setBeachToRender(beachesToShow);
  };
  useEffect(() => {
    allBeaches();
  });

  return (
    <>
      <div className="inicio">
        <a href="http://josemanuelcastellano.com">Inicio</a>
      </div>
      <p className="found">Se han encontrado {beachToRender.length} playas</p>
      <p className="text">{text}</p>
      <div className="main">
        {beachToRender.map((e) => {
          return <Beach key={e.properties.OBJECTID} data={e} />;
        })}
      </div>
    </>
  );
};
