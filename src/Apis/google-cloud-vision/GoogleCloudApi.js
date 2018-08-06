// const express = require('express')
// exports.imageDate = () => {
//     return 'top'
// };

// var async = require('asyncawait/async');
// var await = require('asyncawait/await');


const express = require('express')

exports.imageDate = (async (req, res) => {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient({
        keyFilename: './src/Apis/google-cloud-vision/keyApi.json'
    })


    // Performs label d etection on the image file
    await client
        .labelDetection("./src/Apis/google-cloud-vision/image.jpg")
        .then(results => {
            const labels = results[0].labelAnnotations;

            let date = []

            labels.forEach(label => date.push(label.description))
            console.log(date)
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
});
