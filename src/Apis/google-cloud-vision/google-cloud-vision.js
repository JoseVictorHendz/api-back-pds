const express = require('express')
const Vision = require('@google-cloud/vision');

function createClient() {
    const client = new Vision.ImageAnnotatorClient({
        keyFilename: './src/Apis/google-cloud-vision/keyApi.json'
    })
    return client   
}
 
function imageLocation(imageReference) {
    return "./public/"+imageReference+".png"
}

exports.labelDetection = (async (imageReference) => {
    const client = createClient()

    let data = []

    await client
        .labelDetection(imageLocation(imageReference))
        .then(results => {
            const labels = results[0].labelAnnotations;

            labels.forEach(label => data.push(label.description))
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
    return data
});

exports.imageProperties = (async (imageReference) => {
    const client = createClient()

    let data = []

    await client
        .imageProperties(imageLocation(imageReference))
        .then(results => {
            const properties = results[0].imagePropertiesAnnotation;
            const colors = properties.dominantColors.colors;

            colors.forEach(color => data.push(color.color));
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
    return data
})

exports.imageDocumentTextDetection = (async (imageReference) => {
    const client = createClient()

    let data = []

    await client
        .documentTextDetection(imageLocation(imageReference))
        .then(results => {
            const fullTextAnnotation = results[0].fullTextAnnotation;

            data.push({'text': fullTextAnnotation.text, 'language': fullTextAnnotation.pages[0].property}); //.detectedLanguages[0].languageCode});
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
    return data
})