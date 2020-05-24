import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Random from './components/Random';
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor () {
    super ()
    this.state = {
      addedRestaurant: [],
  }
  this.addRestaurant = this.addRestaurant.bind(this)
  this.saveRating = this.saveRating.bind(this)
  this.removeRestaurant = this.removeRestaurant.bind(this)
}

componentDidMount () {
  axios.get('/api/restaurants').then((res) => {
    this.setState({
      addedRestaurant: [res.data],
    }) 
//      console.log('res: ' + JSON.stringify(res.data))
  })
}

addRestaurant (name, arrondissement, cuisine, rating) {
  const body = { name, arrondissement, cuisine, rating }
  axios.post('/api/restaurants', body).then((res) => { 
    this.setState({
      addedRestaurant: [res.data],
    })
  })
}


saveRating (id, newRating) {
  const body = { newRating}

  axios.put(`/api/restaurants/${id}`, body).then((res) => {
    this.setState({
      addedRestaurant: [res.data],
    })
  })
}

removeRestaurant (id) {
  axios.delete(`/api/restaurants/${id}`).then((res) => {
    this.setState({
      addedRestaurant: [res.data],
    })
  })
}

  render () {
    return(
      <div className="App">
        <Header />
        <h3>Découvrir</h3>
        <Random addRestaurant={this.addRestaurant} />
        <button onClick={() => this.addRestaurant()}>Add to List</button>  
        <List 
          addedRestaurant={this.state.addedRestaurant}
          saveRating={this.saveRating}
          removeRestaurant={this.removeRestaurant}
          />
      </div>
    )
  }
}


export default App
