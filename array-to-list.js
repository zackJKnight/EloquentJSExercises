// Exercise from EloquentJavascript

function arraytoList(myArray) {
    let theRest = {};
    for (i = myArray.length - 1; i > -1; i--) {
      if (i < myArray.length - 1) {
        theRest = {
          value: myArray[i],
          rest: theRest
        };
      } else {
        theRest = {
          value: myArray[i],
          rest: null
        };
      }
    }
    return theRest;
  }
  
  console.log(arraytoList([1, 2, 3]));
  