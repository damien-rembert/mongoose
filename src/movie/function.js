// @ts-check
const Movie = require("./model");

exports.addMovie = async (title, actor, year) => {
    try {
        // const movieObj = {title: title, actor: actor};
        // await Movie.create(movieObj);
        // or a shorter way to write the two lines above:
        // await Movie.create({title: title, actor: actor});
        // or using shorthand object syntax the 
        await Movie.create({title, actor, year});
        return "Success";
    } catch (error) {
        console.log(error);
    }
}

// exports.list = async () => {
//     try {
//         return await Movie.find({});
//     } catch (error) {
//         console.log(error);
//     }
// }

// return filtered list (only one year, only films with such actor)
exports.list = async (query) => {
    if (query) {
        try {
            return await Movie.find(query);
        } catch (error) {
            console.log(error);
        }    
    } else {
        try {
            return await Movie.find({});
        } catch (error) {
            console.log(error);
        }
    }
}


// delete such film

// update film + including name

// delete film
exports.erase = async (query) => {
    if (query) {
        try {
            return await Movie.deleteOne(query);
        } catch (error) {
            console.log(error);
        }    
    // } else {
    //     try {
    //         return await Movie.deleteMany({});
    //     } catch (error) {
    //         console.log(error);
    //     }
    }
}

exports.update = async (title, update) => {
    // console.log("title: ", title);
    // console.log("update query: ", update);
    return await Movie.updateOne(title, update);  
}


// delete films (only one year, only films with such actor)






