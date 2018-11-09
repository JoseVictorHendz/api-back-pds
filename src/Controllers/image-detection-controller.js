const api = require('../Apis/google-cloud-vision/google-cloud-vision')
const translate = require('./sentance-translation-controller')
const colors = require('../utils/colors-controller')
var base64ToImage = require('base64-to-image');


exports.imageLabelDetection = async (req, res, next) => {
  const _targetLanguage = req.params._targetLanguage
  let data = await api.labelDetection(converBase64ForImage(req.body.value))
  data = await translate.localSentanceTranslation(data, _targetLanguage)
  res.json({ value: data });
};

exports.imagePropertiesDetection = async (req, res, next) => {
  const dataRgb = await api.imageProperties()

  data = []

  data = (await colors.parceColors(dataRgb))

  res.json(data);
}

exports.imageDocumentTextDetection = async (req, res, next) => {
  const data = await api.imageDocumentTextDetection()
  res.json(data)
}

function converBase64ForImage(base64) {
  console.log("--------------------", base64.substring(0, 10))

  var base64Str = "data:image/jpeg;base64," + base64
  var path ='./src/Apis/google-cloud-vision/images/';
  var optionalObj = {'fileName': Math.floor(Math.random() * 65536), 'type':'png'};

  base64ToImage( base64Str, path, optionalObj); 
  var imageInfo = base64ToImage(base64Str,path,optionalObj);

  return optionalObj.fileName
}