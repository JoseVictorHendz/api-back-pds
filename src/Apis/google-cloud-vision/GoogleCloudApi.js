const express = require('express')
const vision = require('@google-cloud/vision');

function createClient() {
    // Creates a client
    const client = new vision.ImageAnnotatorClient({
        keyFilename: './src/Apis/google-cloud-vision/keyApi.json'
    })
    return client
}

function imageLocation() {
    return "./src/Apis/google-cloud-vision/image.jpg"
}

exports.imageDate = (async () => {
    const client = createClient()

    let date = []

    // Performs label d etection on the image file
    await client
        .labelDetection(imageLocation())
        .then(results => {
            const labels = results[0].labelAnnotations;

            labels.forEach(label => date.push(label))

        })
        .catch(err => {
            console.error('ERROR:', err);
        });
    return date
});

exports.imageColors = (async () => {
    // Creates a client
    const client = createClient()

    let date = []

    await client
        .imageProperties(imageLocation())
        .then(results => {
            const properties = results[0].imagePropertiesAnnotation;
            const colors = properties.dominantColors.colors;
            colors.forEach(color => date.push(color));
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
    return date
})
