const axios = require('axios')

module.exports = {
    getRandomRestaurant: (req, res) => {
        const randomRestaurant = []
        const randRest = Math.ceil(Math.random() * 5)

        const baseURL = 'http://localhost:3000/restaurants.json'

        axios.get(baseURL + randRest).then((response1) => {
            randomRestaurant.push(response1.data)
        })
    }
}