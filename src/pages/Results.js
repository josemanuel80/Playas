import { useParams } from 'react-router-dom';
import { getAllBeaches } from '../lib/fetch';
import { useEffect, useState } from 'react';
import { Beach } from '../components/Beach.js';
import GoogleMapReact from 'google-map-react';
import '../styles/results.css';
import '../styles/Beach.css';
import { v4 as uuid } from 'uuid';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export const Results = () => {
  const [beachToRender, setBeachToRender] = useState([]);
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
    setBeachToRender(beachesToShow);
  };
  useEffect(() => {
    allBeaches();
  });

  return (
    <>
      <p className="found">Se han encontrado {beachToRender.length} playas</p>
      <div className="main">
        {beachToRender.map((e) => {
          return (
            <>
              <Beach key={e.properties.OBJECTID} data={e} />
            </>
          );
        })}
      </div>
    </>
  );
};
