const api = require('../Apis/google-cloud-vision/GoogleCloudApi')

exports.imageRecognition = async (req, res, next) => {
    const image = await  api.imageDate()
    res.json(image);
  };