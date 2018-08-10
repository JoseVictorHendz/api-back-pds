const api = require('../Apis/google-cloud-vision/google-cloud-vision')
const translate = require('./sentance-translation-controller')
const colors = require('../utils/colors-controller')
const express = require('express');


exports.imageLabelDetection = async (req, res, next) => {
    let data = await  api.labelDetection()
    data = await translate.localSentanceTranslation(data)
    res.json(data);
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