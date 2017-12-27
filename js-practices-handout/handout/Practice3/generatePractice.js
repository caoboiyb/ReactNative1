'use strict'

const MAX_VALUE = 1000000000;

//Create random array
const randomArray = (length, max) => [...new Array(length)]
.map(() => Math.round(Math.random() * max));

// Random func from the Mozilla Developer Network documentation
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createObject(length) {
  var data = {
    "input" : [], 
    "target" : 0,
    "output" : -1
  }

  data.input = randomArray(length, MAX_VALUE).sort();

  if (length >= 4) {
    const ranPos = getRandomInt(0, 3);
    switch (ranPos) {
      case 0:
        data.output = -1 
        break;
      case 1:
        data.output = 0;
        break;
      case 2:
        data.output = data.input.length - 1;
        break;
      case 3:
        data.output = getRandomInt(1, data.input.length - 2);
    }
  } else {
    data.output = getRandomInt(0, length-1);
  }

  data.target = data.input[data.output];  
  return data;
}

function generate(testLengthArray){
  var result = []
  for (let i = 0, size = testLengthArray.length; i < size; i++) {
    let len = testLengthArray[i];
    result.push(createObject(len));
  }
  return result;
}

module.exports = generate
