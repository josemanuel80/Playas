export const getAllBeaches = async () => {
  const getBeaches = await fetch(
    `https://opendata.arcgis.com/datasets/84ddbc8cf4104a579d579f6441fcaa8a_0.geojson`,
  );
  const beaches = await getBeaches.json();
  return beaches.features;
};
