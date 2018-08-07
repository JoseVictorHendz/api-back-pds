const api = require('../Apis/google-cloud-vision/GoogleCloudApi')
const express = require('express');


exports.imageLabelDetection = async (req, res, next) => {
    const data = await  api.labelDetection()
    res.json(data);
  };

exports.imagePropertiesDetection = async (req, res, next) => {
  const data = await api.imageProperties()
  res.json(data);
}