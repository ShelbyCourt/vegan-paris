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
                <p onClick={() => this.checkDiscover() }>{this.props.data.restaurant}</p>
                <p className="P2"> {this.props.data.cuisine} - {this.props.data.Arrondissement} Arrondissement</p>
                <p className="P2"> Rating: {this.props.data.rating}</p>

            </div>
        )
    }
}
// insert a button below the restaurant that will add the Restaurant to the List below
export default Discover 