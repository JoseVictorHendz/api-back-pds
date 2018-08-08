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

exports.labelDetection = (async () => {
    const client = createClient()

    let data = []

    // Performs label d etection on the image file
    await client
        .labelDetection(imageLocation())
        .then(results => {
            const labels = results[0].labelAnnotations;

            labels.forEach(label => data.push(label))

        })
        .catch(err => {
            console.error('ERROR:', err);
        });
    return data
});

exports.imageProperties = (async () => {
    // Creates a client
    const client = createClient()

    let data = []

    await client
        .imageProperties(imageLocation())
        .then(results => {
            const properties = results[0].imagePropertiesAnnotation;
            const colors = properties.dominantColors.colors;
            colors.forEach(color => data.push(color));
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
    return data
})

exports.imageDocumentTextDetection = (async () => {
    // Creates a client
    const client = createClient()

    let data = []

    await client
        .documentTextDetection(imageLocation())
        .then(results => {
            const fullTextAnnotation = results[0].fullTextAnnotation;
            //  data.push(fullTextAnnotation.pages);
            // data.push(fullTextAnnotation.pages);
            data.push(fullTextAnnotation.text);

        })
        .catch(err => {
            console.error('ERROR:', err);
        });
    return data
})