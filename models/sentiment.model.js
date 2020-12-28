const mongoose = require('mongoose')

const Schema = mongoose.Schema

const sentimentSchema = new Schema({
    item: {
        type: String,
        required: true
    },
    pos: {
        type: String,
        required: true
    },
    neg: {
        type: String,
        required: true
    }

    // }, {
    //     timestamps: true,
})

// items is the collection name 
const Sentiment = mongoose.model('items', sentimentSchema)

module.exports = Sentiment