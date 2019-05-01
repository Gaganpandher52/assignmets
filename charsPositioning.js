

function countLetters(arr){

  var splitString = arr;

  var obj = {};

  for (var i = 0; i < splitString.length; i++) {
    if(!obj[splitString[i]]){
      obj[splitString[i]] = [i];
    }

    else if (splitString.charAt(i) == splitString[i]){
      obj[splitString[i]].push(i)
    }
  }
  return obj;
}

console.log(countLetters("lighthouse in the house"));