const express = require('express')
const app = express()
const randomCtrl = require('./controllers/randomRestaurant')
const addedCtrl = require('./controllers/addedRestaurant')
const data =require('./restaurants.json')

const SERVER_PORT = 3388

app.use(express.json())



// Endpoints
app.get('./restaurants.json', addedCtrl.getAddedRestaurant)
app.post('./restaurants.json', addedCtrl.addRestaurant)
app.put('./restaurants.json', addedCtrl.editRating)
app.delete('./restaurants.json', addedCtrl.deleteRestaurant)

app.listen(SERVER_PORT, () =>
    console.log(`Tout va bien sur ${SERVER_PORT}`)
    )