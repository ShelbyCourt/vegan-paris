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
        axios.get('/api/random-restaurant').then((res) => {
            this.setState({
                randomRestaurant: [res.data],
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
                {restaurantMap}
            </div>
        )
    }
}


export default Random