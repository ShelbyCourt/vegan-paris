const express = require('express')
const app = express()
const randomCtrl = require('./controllers/randomRestaurant')
const addedCtrl = require('./controllers/addedRestaurant')


const SERVER_PORT = 3388

app.use(express.json())
//app.use(express.bodyParser())

app.get('/api/random-restaurant', randomCtrl.getRandomRestaurant)

// Endpoints
app.get('/api/restaurants', addedCtrl.getAddedRestaurant)
app.post('/api/restaurants', addedCtrl.addRestaurant)
app.put('/api/restaurants/:restaurant_id', addedCtrl.editRating)
app.delete('/api/restaurants/:restaurant_id', addedCtrl.deleteRestaurant)

app.listen(SERVER_PORT, () =>
    console.log(`Tout va bien sur ${SERVER_PORT}`)
    )