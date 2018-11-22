const ntc = require('../utils/ntc')

exports.parseRgbForColorName = async (dataRgb) => {
    let colorNameEn = []
    let colorNamePtBr = []

    let color = ""

    for(const element of dataRgb) {
        color = await ntc.ntcMatch(await fullColorHex(element.red, element.green, element.blue))
        colorNameEn.indexOf(color) < 0 ? colorNamePtBr.push(translateForPtBr(color)) : false
        colorNameEn.push(color)
    }
    return colorNamePtBr
}

function fullColorHex(r,g,b) {   
    var red = rgbToHexadecimal(r);
    var green = rgbToHexadecimal(g);
    var blue = rgbToHexadecimal(b);
    return "#"+red+green+blue;
  };

function rgbToHexadecimal(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
}

function translateForPtBr(color) {
    switch(color) {
        case "Red": color = "Vermelho"; break
        case "Green": color = "Verde"; break
        case "Blue": color = "Azul"; break
        case "Yellow": color = "Amarelo"; break
        case "Violet": color = "violeta"; break
        case "Brown": color = "Marrom"; break
        case "Black": color = "Preto"; break
        case "White": color = "Branco"; break
        case "Grey": color = "Cinza"; break
        case "Orange": color = "Laranja"; break

        default: color = "cor nao identificada " +color
    }
    return color
}

