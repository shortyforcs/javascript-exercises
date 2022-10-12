const ftoc = function(tempInF) {
  let tempInC = 0
  tempInC = (tempInF - 32) * (5/9)
  // console.log(tempInC)
  return Math.round(tempInC * 10) / 10
};

const ctof = function(tempInC) {
  let tempInF = 0
  tempInF = tempInC * (9/5) + 32
  // console.log(tempInF)
  return Math.round(tempInF * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
