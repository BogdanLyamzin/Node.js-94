import Movie from "../models/Movie.js";

export const getAllMovies = (filter = {}, setting = {}) => Movie.find(filter, "-createdAt -updatedAt", setting).populate("owner", "username email");

export const countMovies = filter => Movie.countDocuments(filter);

export const addMovie = data => Movie.create(data);

export const getMovieByFilter = filter => Movie.findOne(filter);

export const updateMovieByFilter = (filter, data) => Movie.findOneAndUpdate(filter, data);

export const deleteMovieByFilter = filter => Movie.findOneAndDelete(filter);
