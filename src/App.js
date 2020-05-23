import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Random from './components/Random';



import './App.css';


class App extends Component {
  constructor () {
    super ()
    this.state = {
      addedRestaurant: [],
  }
  this.addedRestaurant = this.addedRestaurant.bind(this)

}

componentDidMount () {

}


addedRestaurant (name, arrondissement, cuisine, rating) {

}


saveRating (id, newRating) {

}


removeRestaurant (id) {

}


  render () {
    return(
      <div className="App">
        <Header />
        <h3>Découvrir</h3>
        <Random addedRestaurant={this.addedRestaurant} />
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
