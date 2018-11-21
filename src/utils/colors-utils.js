exports.parseRgbForColorName = async (dataRgb) => {
    let colorName = []

    for(const element of dataRgb) {
        colorName.push(await identificColor(element.red, element.green, element.blue))
    }

    return colorName
}

function identificColor(r, g, b) {
    colorName = "dsads"
    r = 999
    g = 1
    b = 4

    if(r) {
        colorName = "white "+r+" "+g+" "+b
    }
        // if() {
    //     colorName = "black"
    // } 
    // if() {
    //     colorName = "gray"
    // } 
    // if(r) {
    //     colorName = "red"+r+" "+g+" "+b
    // } 
    // if() {
    //     colorName = "orange"
    // } 
    // if() {
    //     colorName = "yellow"
    // } 
    // if() {
    //     colorName = "green"
    // } 
    // if() {
    //     colorName = "blue"
    // } 
    // if() {
    //     colorName = "violet"
    // } 

    // if() {
    //     colorName = "brown"
    // } 
    return colorName
}

/*
white
grey
red
orange
yellow
green
blue
violet
brown

*/