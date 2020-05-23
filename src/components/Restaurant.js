import React, { Component } from 'react'

class Restaurant extends Component {
    constructor (props) {
        super ()
        this.state = {
            isEditRating: false,
            userInput: '',
        }
    }


    toggleEdit () {
        this.state({
            isEditRating: !this.state.isEditRating
        })
    }

    handleChange (e) {
        this.state ({
            userInput: e.target.value
        })
    }

    // handleSaveRating (){
    //     const { data } = this.props
    //     this.props.saveRating(data, id, this.state.userInput)
    //     this.toggleEdit()
    // }

    render () {
        return (
            <div>
                <img scr={this.props.data.image} alt={this.props.data.name} />
                {!this.state.isEditRating ? (
                    <p onClick={() => this.toggleEdit()}>{this.props.data.name}</p>
                ) : (
                    <div>
                        <input onChange={(e) => this.handleChange(e)} />
                        <button onClick={() => this.handleSaveRating()}>Save</button>
                        <button onClick={() => this.toggleEdit()}>Cancel</button>
                        </div>
                )}
                <button onClick={() => this.props.releaseRestaurant(this.props.data.id)}>
                    Remove
                </button>
            </div>
        )}

}

export default Restaurant