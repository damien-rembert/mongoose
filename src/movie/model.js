// @ts-check
const mongoose = require("mongoose");


// the nested objects define the value accepted by the schema
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    actor: {
        type: String,
        default: "Not specified",
    },
    year: {
        type: Number,
        default: -1,
    },
    rating: {
        type: Number,
        default: -1,
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;