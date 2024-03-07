const path = require("path");

const path1 = path.join("movies", "movies.json");
// console.log(path1);
// console.log(__dirname);
const absolutePathMovies1 = path.join(__dirname, "movies", "movies.json");
// console.log(absolutePathMovies1);
const absolutePathMovies2 = path.resolve("movies", "movies.json");
console.log(absolutePathMovies2);