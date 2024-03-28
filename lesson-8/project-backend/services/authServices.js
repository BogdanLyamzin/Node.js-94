import User from "../models/User.js";

export const findUser = filter => User.findOne(filter);

export const signup = data => User.create(data);

export const updateUser = (filter, data)=> User.findOneAndUpdate(filter, data);