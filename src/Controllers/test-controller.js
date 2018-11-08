exports.test = async (request, res) => {
  var base64ToImage = require('base64-to-image');


  // const testParams = request.params
  const base64 = request.body.value
  console.log("--------------------", base64.substring(0, 10))
  console.log("--------------------", base64)


  var base64Str = "data:image/jpeg;base64," + base64
  var path ='./src/Controllers/test/';
  var optionalObj = {'fileName': Math.floor(Math.random() * 65536), 'type':'png'};

    base64ToImage( base64Str, path, optionalObj); 
    
//Note base64ToImage function returns imageInfo which is an object with imageType and fileName.
  var imageInfo = base64ToImage(base64Str,path,optionalObj); 
  res.json({value:'working test'});
};

exports.test1 = async (request, res) => {
  const testParams = request.params
  const testBody = request.body.value
  console.log("--------------------", testParams, testBody)
  res.json({value:'working test'});
};