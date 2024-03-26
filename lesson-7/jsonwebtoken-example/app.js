import jwt from "jsonwebtoken";
import "dotenv/config";

const {JWT_SECRET} = process.env;

const payload = {
    id: "66031349fc6fc3096b7abe02"
};

const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "23h"});
// console.log(token);
const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const {id} = jwt.verify(token, JWT_SECRET);
    // console.log(id);
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDMxMzQ5ZmM2ZmMzMDk2YjdhYmUwMiIsImlhdCI6MTcxMTQ3OTE2OSwiZXhwIjoxNzExNTYxOTY5fQ.NdFvYxGZUp2N3bnLNqJEva6DJ3RI-W6ruEfU7_-9Oqy";
    jwt.verify(invalidToken, JWT_SECRET);
}
catch(error) {
    console.log(error.message);
}