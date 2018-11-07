const express = require('express')
const server = express()
const bodyParser = require("body-parser");

server.use(
    bodyParser.json({
      verify: function(req, res, buf) {
        req.rawBody = buf;
      },
      limit: "50mb"
    })
  );
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/", require("./Routes"))

server.listen(process.env.PORT || 3000, () => {
    console.log("Server listening in port 3000\nCtrl + c quit")
})

module.exports = server;