// @ts-check
require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, list, erase, update } = require("./movie/function");


const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            console.log(await addMovie(yargsObj.title, yargsObj.actor, yargsObj.year));

        } else if (yargsObj.list) {
            if (yargsObj.actor) {
                console.log(await list({actor: yargsObj.actor}));
            } else if (yargsObj.year) {
                console.log(await list({year: yargsObj.year}));
            } else if (yargsObj.rating) {
                console.log(await list({rating: yargsObj.rating}));
            } else {
                console.log(await list());
            }
        } else if (yargsObj.delete) {
            if (yargsObj.title) {
                console.log(await erase({title: yargsObj.title}));
            } else if (yargsObj.actor) {
                console.log(await erase({actor: yargsObj.actor}));
            } else if (yargsObj.year) {
                console.log(await erase({year: yargsObj.year}));
            } else {
                // delete all
                // console.log(await erase());
                console.log("delete all is not enabled");
            }
        } else if (yargsObj.update) {
            if (yargsObj.actor) {
                console.log(await update({title: yargsObj.title}, {actor: yargsObj.actor}));
            } else if (yargsObj.year) {
                console.log(await update({title: yargsObj.title}, {year: yargsObj.year}));
            } else if (yargsObj.rating) {
                console.log(await update({title: yargsObj.title}, {rating: yargsObj.rating}));
            } else if (yargsObj.newtitle) {
                console.log(await update({title: yargsObj.title}, {title: yargsObj.newtitle}));
            }
        } else {
            console.log("Incorrect command");
        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
};




app(yargs.argv);