exports.parseRgbForColorName = async (dataRgb) => {
    let colorName = []

    for(const element of dataRgb) {
        colorName.push(await fullColorHex(element.red, element.green, element.blue))
    }

    return colorName
}

function fullColorHex(r,g,b) {   
    var red = rgbToHexadecimal(r);
    var green = rgbToHexadecimal(g);
    var blue = rgbToHexadecimal(b);
    return red+green+blue;
  };

function rgbToHexadecimal(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
}

// function identificColor(hexadecimal) {
//     return colorName
// }