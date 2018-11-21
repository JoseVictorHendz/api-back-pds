const fs = require('fs');

exports.converBase64ForImage = async (base64) => {
    const imageReference = Math.floor(Math.random() * 65536)
    await fs.writeFile('./public/'+imageReference+'.png', base64, 'base64', function(err) {
      if (err) next(err);
    });
    return imageReference
}