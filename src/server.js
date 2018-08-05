const express = require('express')
const app = express()

app.use("/", require("./Routes"))
// app.get('/', function (req, res) {
//     res.send('Hello World!');
//   });

app.listen(3000, () => {
    console.log("Server listening in port 3000\nCtrl + c quit")
})

module.exports = app;