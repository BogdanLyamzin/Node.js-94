import Movie from "../models/Movie.js";

export const getAllMovies = () => Movie.find();

// export const getMovieById = async (id) => {
//     const movies = await getAllMovies();
//     const result = movies.find(item => item.id === id);

//     return result || null;
// }

// export const addMovies = async (data) => {
//     const movies = await getAllMovies();
//     const newMovie = {
//         id: nanoid(),
//         ...data,
//     };
//     movies.push(newMovie);
//     await updateMovies(movies);

//     return newMovie;
// }

// export const updateMovieById = async (id, data) => {
//     const movies = await getAllMovies();
//     const index = movies.findIndex(item => item.id === id);
//     if (index === -1) {
//         return null;
//     }
//     movies[index] = { ...movies[index], ...data };
//     await updateMovies(movies);

//     return movies[index];
// }

// export const deleteMovieById = async (id) => {
//     const movies = await getAllMovies();
//     const index = movies.findIndex(item => item.id === id);
//     if (index === -1) {
//         return null;
//     }
//     const [result] = movies.splice(index, 1);
//     await updateMovies(movies);

//     return result;
// }