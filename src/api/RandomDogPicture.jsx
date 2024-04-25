import { useState, useEffect, useMemo } from 'react';
const RandomDogPicture = () => {
  const [photoUrl, setPhotoUrl] = useState([]);
  const [photoHtml, setPhotoHtml] = useState([]);

  useEffect(() => {
    fetch('https://random.dog/woof.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotoUrl(data.url);
      });
  }, []);

  // Pretending that this could be a data heavy calculation with the fetched API data just for practicing adding useMemo
  useMemo(() => {
    setPhotoHtml(<img src={photoUrl} alt={photoUrl} />);
  }, [photoUrl]);
  return (
    <>
      {photoHtml}
    </>
  );
};
export default RandomDogPicture;