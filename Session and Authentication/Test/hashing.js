const bcrypt = require("bcrypt");

const hashedPass = bcrypt.hashSync("12345", 10);
// console.log(hashedPass);

const res = bcrypt.compareSync("12345", hashedPass);
console.log(res);
