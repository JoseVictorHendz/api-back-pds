const api = require('../Apis/google-cloud-vision/GoogleCloudApi')
const express = require('express');


exports.imageRecognition = async (req, res, next) => {
    const image = await  api.imageDate()
    res.json(image);
  };

exports.imageRecognitionColors = async (req, res, next) => {
  const image = await api.imageColors()
  res.json(image);
}