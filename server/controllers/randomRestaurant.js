const axios = require('axios')

module.exports = {
    getRandomRestaurant: (req, res) => {
        const randomRestaurant = []
        const randRest = Math.ceil(Math.random() * 5)

        const baseData = './restaurants.json'

        axios.get(baseData + randRest).then((response1) => {
            randomRestaurant.push(response1.data)
        })
    }
}