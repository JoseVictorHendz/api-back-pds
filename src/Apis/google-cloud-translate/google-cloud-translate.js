const express = require('express')
const Translate = require("@google-cloud/translate")

function createClient() {
    const client = new Translate({
        keyFilename: './src/Apis/google-cloud-translate/keyApi.json'
    });
    return client
}

exports.sentanceTranslation = (async (text, target) => {
    const client = createClient()

    let data = []

    await client
        .translate(text, target)
        .then(results => {
            const translation = results[0];
            data.push(translation)
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
    return data[0]
})