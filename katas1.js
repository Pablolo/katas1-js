// Numbers to Letters

function switcher(x){
  const objectWords = {1:'z',2:'y',3:'x',4:'w',5:'v',6:'u',7:'t',8:'s',9:'r',10:'q',
11:'p',12:'o',13:'n',14:'m',15:'l',16:'k',17:'j',18:'i',19:'h',20:'g',
21:'f',22:'e',23:'d',24:'c',25:'b',26:'a',27:'!',28:'?',29:' '}

const toArray = x.map(function (y) {
  return objectWords[y * 1]; 
});

return toArray.join('');
}

switcher(['24', '12', '23', '22', '4', '26', '9', '8']);

// Remove First and Last Character

function removeChar(str){
  const removeFirst = str.substr(1);
  const finalResult = removeFirst.slice(0, -1);
  return finalResult;
};

removeChar('eloquent');

// Vowel Count

function getCount(str) {
  let vowelsCount = 0;
  let stringToArray = str.split('');
  for (i = 0; i < stringToArray.length; i++) { 
    if (stringToArray[i] === 'a' || stringToArray[i] === 'e' || stringToArray[i] === 'i' || stringToArray[i] === 'o' || stringToArray[i] === 'u') {
      vowelsCount = vowelsCount + 1; 
    }
  } 
  return vowelsCount;
}

getCount("abracadabra");

// Sum Mixed Array

function sumMix(x){
  let newArrayInt = [];
  for (i = 0; i < x.length; i++) { 
    newArrayInt.push(parseInt(x[i], 10));
  }
  let finalSum = 0;
  for (i = 0; i < newArrayInt.length; i++) { 
    finalSum += newArrayInt[i];
  }
  return finalSum;
}

sumMix([9, 3, '7', '3']);

// Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  let positiveNum = [];
  let negativeNum = [];
  if (input == null || input.length < 1) {
    return [];
  }
  for (i = 0; i < input.length; i++) { 
    if (input[i] > 0) {
      positiveNum.push(input[i]);
    } else {
      negativeNum.push(input[i]);
    }
  }
  let finalpositiveSum = positiveNum.length;
  let finalnegativeSum = 0;
  for (i = 0; i < negativeNum.length; i++) {  
    finalnegativeSum += negativeNum[i];
  }
  let result = [];
  result.push(finalpositiveSum, finalnegativeSum);
  return result;
}

countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);

// Get the mean of an array

function getAverage(marks){
  let sum = 0;
  for (i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  sum /= marks.length;
  let result = Math.floor(sum);
  return result;
}

getAverage([1,2,3,4,5]);


// Find numbers which are divisible by given number

function divisibleBy(numbers, divisor){
  let result = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor == 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}

divisibleBy([1, 2, 3, 4, 5, 6], 2);

// List Filtering

function filter_list(l) {
  let result = [];
  for (i = 0; i < l.length; i++) {
    if (typeof l[i] === 'number') {
      result.push(l[i]);
    }
  }
  return result;
}

filter_list([1,'a','b',0,15]);

// Credit Card Mask

function maskify(cc) {
  let result = "";
  for (i = 0; i < cc.length; i++) {
    if (i < cc.length - 4) {
      result += '#';
    } else {
      result += cc[i];
    }
  }
  return result;
}

maskify("4556364607935616");

// Flatten

var flatten = function (array){
  let result = array.flat();
  return result;
}

flatten([[1,2,3],["a","b","c"],[1,2,3]]);

// Square Every Digit

function squareDigits(num){
  let numToString = num.toString();
  let stringResult = "";
  for (i = 0; i < numToString.length; i++) {
    stringResult += numToString[i] ** 2;
  }
  return parseInt(stringResult, 10);
}

squareDigits(9119);