
function makeDict(array) {
  let fxnDict = {};

  for (let i=0; i < array.length; i++) {

    if (array[i] in fxnDict) {
      fxnDict[array[i]] += 1;
    } else {
      fxnDict[array[i]] = 1;
    };
  };
  return fxnDict
}


let orderStr = prompt("Please enter your froyo flavors: Separated by commas");
let orderList = orderStr.split(",");
let orderDict = makeDict(orderList);
console.log(orderDict);

