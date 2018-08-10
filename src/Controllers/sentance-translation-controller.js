const api = require('../Apis/google-cloud-translate/google-cloud-translate')
const express = require('express');

exports.sentanceTranslation = async (req, res, next) => {
  const text = req.params._text;
  const target = req.params._target;

  const data = await api.sentanceTranslation(text, target)

  res.json(data);
};

exports.localSentanceTranslation = async (array) => {
  let data = []

  for(const element of array){
    data.push(await api.sentanceTranslation(element, 'pt'))
  }
  return data
}
