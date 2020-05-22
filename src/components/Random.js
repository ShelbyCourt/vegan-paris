import React, { Component } from 'react'
import Discover from './Discover'
import axios from 'axios'


class Random extends Component {
    constructor() {
        super()
        this.state = {
            randomRestaurant: [],
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    
    }

    componentDidMount() {
        axios.get('./restaurants.json').then((res) => {
            this.setState({
                restaurants: res.data,
            })
        })
    }

    render () {
        const restaurantMap = this.state.randomRestaurant.map((restaurant) => (
            <Discover 
            key={restaurant.id}
            addRestaurant={this.props.addRestaurant}
            data={restaurant}
            refreshFn={this.componentDidMount}
            />
        ))


        return (
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <h3>Mes restaurants végans</h3>
            </div>
        )


    }
}


export default Random