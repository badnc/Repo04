function main() {

    firstNum = 6;
        firstNum *= 9;
    secondNum = 25;
        secondNum /= 5;
    thirdNum = 5.2;
        thirdNum *= 10;

    return {
        firstNum,
        secondNum,
        thirdNum
    };
    
}

console.log(main());
module.exports = main;