import * as moviesServices from "../services/moviesServices.js";

import ctrlWrapper from "../decorators/ctrlWrapper.js";

import HttpError from "../helpers/HttpError.js";

const getAll = async (req, res) => {
    const {_id: owner} = req.user;
    const {page = 1, limit = 10} = req.query;
    const skip = (page - 1) * limit;
    const result = await moviesServices.getAllMovies({owner}, {skip, limit});
    const total = await moviesServices.countMovies({owner});

    res.json({
        result,
        total,
    });
}

const getById = async (req, res) => {
    const {_id: owner} = req.user;
    const { id } = req.params;
    const result = await moviesServices.getMovieByFilter({owner, _id: id});
    if (!result) {
        throw HttpError(404, `Movie with id=${id} not found`);
    }

    res.json(result);
}

const add = async (req, res) => {
    const {_id: owner} = req.user;
    const result = await moviesServices.addMovie({...req.body, owner});

    res.status(201).json(result);
}

const updateById = async (req, res) => {
    const {_id: owner} = req.user;
    const { id } = req.params;
    const result = await moviesServices.updateMovieByFilter({owner, _id: id}, req.body);
    if (!result) {
        throw HttpError(404, `Movie with id=${id} not found`);
    }

    res.json(result);
}

const deleteById = async (req, res) => {
    const {_id: owner} = req.user;
    const { id } = req.params;
    const result = await moviesServices.deleteMovieByFilter({owner, _id: id});
    if (!result) {
        throw HttpError(404, `Movie with id=${id} not found`);
    }

    res.json({
        message: "Delete success"
    });
}

export default {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    updateById: ctrlWrapper(updateById),
    deleteById: ctrlWrapper(deleteById),
}