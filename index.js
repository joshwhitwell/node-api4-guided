require('dotenv').config()

const server = require("./api/server.js");

const port = process.env.PORT || 5000
const secret = process.env.SECRET || 'server.js secret'

// console.log(port, secret)

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
