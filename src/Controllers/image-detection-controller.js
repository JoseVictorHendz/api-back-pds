const api = require('../Apis/google-cloud-vision/google-cloud-vision')
const translate = require('./sentance-translation-controller')
const colorsUtils = require('../utils/colors-utils')
const jsonUtils = require('../utils/json-utils')
const imageUtils = require('../utils/image-utils')



exports.imageLabelDetection = async (req, res, next) => {
  const _targetLanguage = req.params._targetLanguage
  let data = await api.labelDetection(await imageUtils.converBase64ForImage(req.body.value))
  data = await translate.localSentanceTranslation(data, _targetLanguage)
  console.log("------------------\n"+data[0]+"\n----------------------")
  res.json(await jsonUtils.modificJson(data));
};

exports.imagePropertiesDetection = async (req, res, next) => {
  const dataRgb = await api.imageProperties(await imageUtils.converBase64ForImage(req.body.value))
  console.log("------------------\n"+dataRgb+"\n----------------------")
  const data = await colorsUtils.parseRgbForColorName(dataRgb)
  res.json(await jsonUtils.modificJson(data));

}

exports.imageDocumentTextDetection = async (req, res, next) => {
  const data = await api.imageDocumentTextDetection( await imageUtils.converBase64ForImage(req.body.value))
  console.log("------------------\n"+data+"\n----------------------")
  res.json(await jsonUtils.modificJson(data));
}