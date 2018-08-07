const express = require('express')
const app = express()

app.use("/", require("./Routes"))

app.listen(3000, () => {
    console.log("Server listening in port 3000\nCtrl + c quit")
})

module.exports = app;