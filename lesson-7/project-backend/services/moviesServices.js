import Movie from "../models/Movie.js";

export const getAllMovies = () => Movie.find({}, "-createdAt -updatedAt");

export const addMovie = data => Movie.create(data);

export const getMovieById = async (id) => {
    // const data = await Movie.findOne({_id: id});
    const data = await Movie.findById(id);
    return data;
}

export const updateMovieById = (id, data) => Movie.findByIdAndUpdate(id, data);

export const deleteMovieById = id => Movie.findByIdAndDelete(id);
