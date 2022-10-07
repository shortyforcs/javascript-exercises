const repeatString = function(word, timesToRepeat) {
    if(timesToRepeat < 0)
        return "ERROR"
    let answer = '';
    for(let i = 0; i < timesToRepeat; i++){
        answer += word;
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
