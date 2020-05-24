import React, { Component } from 'react'

class Discover extends Component {
    constructor(props) {
        super()
        this.state = {
            discoverClicked: false,
        }
    }


    checkDiscover() {
        const {data} = this.props
        this.props.addRestaurant(data.name, data.arrondissement, data.cuisine, data.image)
        this.props.refreshFn()
    }

    render() {
        return (
            <div>                
                <img
                    scr={this.props.data.image}
                    alt={this.props.data.name}
                    onClick={() => this.checkDiscover()}
                    />
                <p>{this.props.data.restaurant}</p>
            </div>
        )
    }
}

export default Discover 