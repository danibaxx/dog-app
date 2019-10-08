import React, { useEffect, useState } from 'react'
import axios from 'axios';
// imported with {} due to no default export in file
import { useInput } from './utilities/input';

import './App.css';

function App(props) {
  const [breed, setBreed] = useInput('doberman');
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([])
    fetchDogImages()
  }, [breed])

  const fetchDogImages = () => {
    axios
    .get(`https://dog.ceo/api/breed/${breed}/images`)
    .then(response => {
      // console.log("response", response.data.message)
      setImages(response.data.message)
      })
    .catch(error => {
      console.log('Error', error)
    })
  }

  const handleChange = (event) => {
    setBreed(event.target.value)
  }

  return (
    <>
    <h1>The Dog App</h1>

      <select value={breed} onChange={handleChange}>
        <option value='doberman'>Doberman</option>
        <option value='husky'>Husky</option>
        <option value='corgi'>Corgi</option>
      </select>
      <div>
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt='Dog' 
          />
        ))}
      </div>
    </>
  );
};

export default App;