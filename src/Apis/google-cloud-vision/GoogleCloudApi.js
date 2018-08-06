const express = require('express')

exports.imageDate = (async (req, res) => {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient({
        keyFilename: './src/Apis/google-cloud-vision/keyApi.json'
    })

    let date = []

    // Performs label d etection on the image file
    const top = await client
        .labelDetection("./src/Apis/google-cloud-vision/image.jpg")
        .then(results => {
            const labels = results[0].labelAnnotations;

            labels.forEach(label => date.push(label))

        })
        .catch(err => {
            console.error('ERROR:', err);
        });
    return date
});
