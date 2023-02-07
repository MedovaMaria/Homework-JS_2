function getSomeNum (num1, num2) {
    let result = num1;

  
    let intervalNum = setInterval(function () {
    if (result <= num2) {
       console.log(result)
    result++;     
 }
      else   clearInterval(intervalNum);
    }, 1000);
}

getSomeNum (2, 5);



