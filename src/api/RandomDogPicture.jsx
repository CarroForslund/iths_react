import { useState, useEffect } from 'react';
const RandomDogPicture = () => {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    fetch('https://random.dog/woof.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhoto(data);
      });
  }, []);
  return (
    <img src={photo.url} alt={photo.url} />
  );
};
export default RandomDogPicture;