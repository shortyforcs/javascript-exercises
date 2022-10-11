const removeFromArray = function(array, ...toRemove) {
    const answer = []
    for(let i = 0; i < array.length; i++){
        //if toRemove includes the current letter of array, skip it and keep going
        if(toRemove.includes(array[i])){
            continue;
        }
        //otherwise add it to answers
        answer.push(array[i]);
    }
    return answer;
};


// Do not edit below this line
module.exports = removeFromArray;
