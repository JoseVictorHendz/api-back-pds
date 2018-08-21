const api = require('../Apis/google-cloud-translate/google-cloud-translate')

exports.sentanceTranslation = async (req, res, next) => {
  const _text = req.params._text;
  const _currentLanguage = req.params._currenteLanguage;
  const _targetLanguage = req.params._targetLanguage;

  const data = await api.sentanceTranslation(_text, _targetLanguage)

  res.json({translation: data, currentLanguage: _currentLanguage, targetLanguage: _targetLanguage});
};

exports.localSentanceTranslation = async (array, _targetLanguage) => {
  let data = []

  for(const element of array) {
    data.push(await api.sentanceTranslation(element, _targetLanguage))
  }
  return data
}
