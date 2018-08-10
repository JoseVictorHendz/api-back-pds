exports.parceColors = async (dataRgb) => {
    let hexColors = []

    dataRgb.forEach(element => {
        hexColors.push(parseRGBForHex('rgb('+element.red+', '+element.green+', '+element.blue+')'))
    });

    return hexColors
}

function parseRGBForHex(rgb) {
    if (rgb.substr(0, 1) === '#') {
        return rgb;
    }
    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(rgb);

    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);

    var rgb = blue | (green << 8) | (red << 16);
    return digits[1] + '#' + rgb.toString(16);
}