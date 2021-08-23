import { useParams } from 'react-router-dom';
import { getAllBeaches } from '../lib/fetch';
import { useEffect, useState } from 'react';
import { Beach } from '../components/Beach.js';
import { useHistory } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import '../styles/results.css';
import '../styles/Beach.css';

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
      <h2>Se han encontrado {beachToRender.length} playas</h2>
      <div className="main">
        {beachToRender.map((e) => {
          return (
            <>
              <Beach key={e.properties.OBJECTID} data={e} />
              <br></br>
              <div className="SimpleMap">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: 'AIzaSyDY85wbf_dvuAcMW0RgRVyDFhUASqbzcyg',
                  }}
                  defaultCenter={{
                    lat: e.properties.Coordena_5,
                    lng: e.properties.Coordena_4,
                  }}
                  defaultZoom={11}
                >
                  <AnyReactComponent
                    lat={e.properties.Coordena_5}
                    lng={e.properties.Coordena_4}
                    /*         lat={e.properties.coordena_4}
                    lng={e.properties.coordena_5} */
                    text="Aquí"
                  />
                </GoogleMapReact>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
