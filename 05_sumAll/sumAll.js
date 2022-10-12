const sumAll = function(num1, num2) {
    //precondition checks
    //if any are not numbers
    if(typeof num1 != 'number' || typeof num2 != 'number')
        return "ERROR";
    //if any numbers are negative
    if(num1 < 0 || num2 < 0)
        return "ERROR";
    let sum = 0;
    //figure out which one is higher and lower
    const lower = (num1 <= num2) ? num1 : num2;
    const higher = (num1 > num2) ? num1 : num2;
    console.log(`lower: ${lower}`)
    console.log(`higher: ${higher}`)
    for(let i = lower; i <= higher; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
