import { useState } from 'react';

export function useInput(initialValue) {
  // initialValue can be a primitive type OR a Callback function
  // if a cb(), whatever is returned is the initialValue
  const [value, setValue] = useState(initialValue)
  const customSetter = (newValue) => {
    console.log('New Value', newValue)
    setValue(newValue)
  }

  return [value, customSetter]
}

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useInput(() => {
    return window.localStorage.getItem(key) || initialValue
  })

  const customSetter = (newValue) => {
    setValue(newValue)
    window.localStorage.setItem(key, newValue)
  }

  return [value, customSetter]
}