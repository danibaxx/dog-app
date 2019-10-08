import React, { Component } from 'react'
import axios from 'axios';

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      // set the default value to husky
      breed: 'husky',
      images: []
    }
  }

  componentDidMount() {
    this.fetchDogImages()
  }

// params that is given to Update to help with infinite looping 
  componentDidUpdate(prevProps, prevState) {
    if (prevState.breed !== this.state.breed) {
      this.setState({
        images: []
      })
      this.fetchDogImages()
    }
  }

  fetchDogImages = () => {
    axios
    .get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
    .then(response => {
      // console.log("response", response.data.message)
      this.setState({
        images: response.data.message
      })
    })
    .catch(error => {
      console.log('Error', error)
    })
  }

  handleChange = (event) => {
    this.setState({
      breed: event.target.value
    });
  };

  render() {
    return (
      <>
      <h1>The Dog App</h1>

        <select value={this.state.breed} onChange={this.handleChange}>
          <option value='doberman'>Doberman</option>
          <option value='husky'>Husky</option>
          <option value='corgi'>Corgi</option>
        </select>
        <div>
          {this.state.images.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt='Dog' 
            />
          ))}
        </div>
      </>
    )
  }
}

