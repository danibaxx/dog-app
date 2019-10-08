import { useState, useEffect } from 'react';
import axios from 'axios';

export function useDogImages(breed, count) {
  const [images, setImages] = useState([])

  // runs when any breed/count change
  useEffect(() => {
    setImages([])
    axios
    .get(`https://dog.ceo/api/breed/${breed}/images/random/${count}`)
    .then(response => {
      // console.log("response", response.data.message)
      setImages(response.data.message)
      })
    .catch(error => {
      console.log('Error', error)
    })
  }, [breed, count])

  return [images, setImages]
}
