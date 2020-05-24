const restaurants = [{ restaurant: '' , arrondissement: '', cuisine: '', rating: '', id: '', image: ''}]
let id = 1


module.exports = {
    getAddedRestaurant: (req, res) => {
        res.status(200).send(restaurants)
    },


    addRestaurant: (res, req) => {
        console.log('req: ' + Object.getOwnPropertyNames(req));
        console.log('body: ' + req._hasBody);
        const {restaurant, arrondissement, cuisine, rating} = req.body

        const newRestaurant = {restaurant, arrondissement, cuisine, rating, id}
        console.log(newRestaurant);
        restaurants.push(newRestaurant);

        id++

        res.status(200).send(restaurants)
    },
  

    editRating: (req, res) => {
        const { restaurant_id } = req.params
        const { newRating} = req.body

        const index = restaurants.findIndex((element) => element.id === +restaurants_id)
        
        restaurants[index].rating = newRating

        res.status(200).send(restaurants)
    },

    deleteRestaurant: (req, res) => {
        const {restaurant_id} = req.params

        const index = restaurants.findIndex((element) => element.id === +restaurants_id)

        if (index === -1) { 
        return res.status(404).send('Restaurant not found')
        }

        restaurants.splice(index, 1)

        res.status(200).send(restaurants)
    },
}