const restaurant = [{ name: '' , arrondissement: '', cuisine: '', rating: '', id: '', image: ''}]

module.exports = {
    getAddedRestaurant: (req, res) => {
        res.status(200).send(restaurant)
    },
    addRestaurant: (res, req) => {
        const {name, arrondissement, cuisine, rating} = req.body

        const newRestaurant = {id, name, arrondissement, cuisine, rating}

        restaurant.push(newRestaurant)

        id++

        res.status(200).send(restaurant)
    },

    editRating: (req, res) => {
        const { restaurant_id } = req.params
        const { newRating} = req.body

        const index = restaurant.findIndex((element) => element.id ===+ restaurant.id)
        
        restaurant[index].rating = newRating

        res.status(200).send(restaurant)

    },

    deleteRestaurant: (req, res) => {
        const {restaurant_id} = req.params
        const index = restaurant.findIndex((element) => element.id === +restaurant.id)

        if (index === -1) { 
        return res.status(404).send('Restaurant not found')
        }

        restaurant.splice(index, 1)

        res.status(200).send(restaurant)
    },

}