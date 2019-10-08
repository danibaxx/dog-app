import React from 'react'
// import axios from 'axios';
// imported with {} due to no default export in file
import { useLocalStorage } from './utilities/input';
import { useDogImages } from './utilities/api';

import './App.css';

function App(props) {
  const [breed, setBreed] = useLocalStorage('breed', 'doberman');
  const [count, setCount] = useLocalStorage('count', 1);
  const [images, setImages] = useDogImages(breed, count);

  // useEffect(() => {
  //   setImages([])
  //   fetchDogImages()
  // }, [breed, count])

  // const fetchDogImages = () => {
  //   axios
  //   .get(`https://dog.ceo/api/breed/${breed}/images/random/${count}`)
  //   .then(response => {
  //     // console.log("response", response.data.message)
  //     setImages(response.data.message)
  //     })
  //   .catch(error => {
  //     console.log('Error', error)
  //   })
  // }
asdfa
  return (
    <>
    <h1>The Dog App</h1>

      <select value={breed} onChange={e => setBreed(e.target.value)}>
        <option value='doberman'>Doberman</option>
        <option value='bullterrier'>Pitbull</option>
        <option value='dane'>Dane</option>
      </select>

      <input 
        type='number'
        placeholder='Image Count'
        value={count}
        onChange={e => setCount(e.target.value)}
      />
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