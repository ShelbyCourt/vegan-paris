const restaurants = [{ name: '' , arrondissement: '', cuisine: '', rating: '', id: '', image: ''}]
let id = 1

module.exports = {
    getAddedRestaurant: (req, res) => {
        res.status(200).send(restaurants)
    },
    addRestaurant: (res, req) => {
        const {name, arrondissement, cuisine, rating} = req.body

        const newRestaurant = {id, name, arrondissement, cuisine, rating}

        restaurants.push(newRestaurant)

        id++

        res.status(200).send(restaurants)
    },

    editRating: (req, res) => {
        const { restaurant_id } = req.params
        const { newRating} = req.body

        const index = restaurants.findIndex((element) => element.id ===+ restaurants.id)
        
        restaurants[index].rating = newRating

        res.status(200).send(restaurants)

    },

    deleteRestaurant: (req, res) => {
        const {restaurant_id} = req.params
        const index = restaurants.findIndex((element) => element.id === +restaurants.id)

        if (index === -1) { 
        return res.status(404).send('Restaurant not found')
        }

        restaurants.splice(index, 1)

        res.status(200).send(restaurants)
    },

}