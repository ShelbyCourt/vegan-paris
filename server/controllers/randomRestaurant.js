const restaurants =require('../restaurants')

module.exports = {
    getRandomRestaurant: (req, res) => {
        console.log('getRandomRestaurant');
        console.log('First restaurant name: ' + restaurants.restaurantList[0].restaurant);
        const randRestIndex = Math.ceil(Math.random() * 4);  // get random number, 0 - 4
        const restaurant = restaurants.restaurantList[randRestIndex];
        // console.log('restaurant: ' + restaurant);
        res.status(200).send(restaurant);
        // res.status(200).send('Hello');
    }
}