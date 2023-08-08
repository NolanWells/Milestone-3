const mongoose = require('mongoose')
 
const CheckoutItemsSchema = new mongoose.Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    cal: {type: Number, required: true},
    description: {type: String, required: true}
})

module.exports = mongoose.model('CheckoutItems', CheckoutItemsSchema)