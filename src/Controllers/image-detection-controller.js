const api = require('../Apis/google-cloud-vision/google-cloud-vision')
const translate = require('./sentance-translation-controller')
const colors = require('../utils/colors-controller')
var base64ToImage = require('base64-to-image');
const fs = require('fs');


exports.imageLabelDetection = async (req, res, next) => {
  const _targetLanguage = req.params._targetLanguage
  let data = await api.labelDetection(converBase64ForImage(req.body.value))
  data = await translate.localSentanceTranslation(data, _targetLanguage)
  console.log("------------------\n"+data+"\n----------------------")
  res.json({ value: data });
};

exports.imagePropertiesDetection = async (req, res, next) => {
  const dataRgb = await api.imageProperties(converBase64ForImage(req.body.value))

  // data = []

  // data = (await colors.parceColors(dataRgb))
  console.log("------------------\n"+dataRgb+"\n----------------------")

  res.json({ value: dataRgb });
}

exports.imageDocumentTextDetection = async (req, res, next) => {
  const data = await api.imageDocumentTextDetection(converBase64ForImage(req.body.value))
  console.log("------------------\n"+data+"\n----------------------")
  res.json({ value: data });
}

function converBase64ForImage(base64) {
  const imageReference = Math.floor(Math.random() * 65536)
  fs.writeFile('./public/'+imageReference+'.png', base64, 'base64', function(err) {
    if (err) next(err);
  });
  return imageReference
}