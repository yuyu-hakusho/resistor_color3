const colorsMap = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
};

export function colorCode(color) {
    return colorsMap[color]; //translates the color word into the value
}

export function decodedResistorValue(colorsArray) {
    const colorNums = colorsArray.map(colorCode); //converts each color in the colorsArray to its value, and stores each value in a new array. we know from the tests that we want the input to be an array
    const num1 = colorNums[0]; //creates a new variable that is for the first value of the colorsArray
    const num2 = colorNums[1]; //creates a new variable that is for the 2nd value of the colorsArray
    const numZeroes = colorNums[2]; //creates a new variable that is for the 3rd value of colorsArray, which is essentially how many zeroes we will need to show 

    let resistance = (num1 * 10 + num2) * Math.pow(10, numZeroes); //converts num1 and num2 into a single number, then multiplies it by however many 10s to essentially add the zeroes

    if (resistance >= 1000) {
        return resistance/1000 + " kiloohms";
    }
    else {
        return resistance +" ohms";
    }

}
