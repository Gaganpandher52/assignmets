

function countLetters(arr){

  var splitString = arr.split(" ").join("");

  var obj ={};

  for (var i = 0; i < splitString.length; i++) {
    if(!obj[splitString[i]]){
      obj[splitString[i]] = 1;
    }
    else{
      obj[splitString[i]]++;
    }

  }
  return obj;
}

console.log(countLetters("lighthouse in the house"));