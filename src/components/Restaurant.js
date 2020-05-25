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
        console.log("inside toggleEdit!!!");
        this.setState({
            isEditRating: !this.state.isEditRating
        })
    }

    handleChange(e) {
        this.setState({
          userInput: e.target.value,
        })
      }

      handleSaveRating (){
          const { data } = this.props
          this.props.saveRating(data.id, this.state.userInput)
          this.toggleEdit()
      }


    render() {
        return (
        <div className="RestList">

            <p>{this.props.data.restaurant}</p>

            {!this.state.isEditRating ? (
            <p className="P2" onClick={() => this.toggleEdit()}>Rating: {this.props.data.rating}</p>
  
            ) : (
            <div>
                <input onChange={(e) => this.handleChange(e)} />
                <button onClick={() => this.handleSaveRating()}>Save</button>
                <button onClick={() => this.toggleEdit()}>Cancel</button>
            </div>
            )}

            <button onClick={() => this.props.removeRestaurant(this.props.data.id)}>
            Remove
            </button>

        </div>
        )
        }
    }

export default Restaurant