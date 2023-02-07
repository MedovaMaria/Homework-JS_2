let arr = [0, 1, 2, 3, 4, 5, 6, 'apple', null, 'tea'];

function howMuch() {
    let countOfEven = 0;
    let countOfOdd = 0;
    let countOfOther = 0;

    for (let i = 0; i < arr.length; i++) {

    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        countOfOther++;

    } else {

        if (arr[i] % 2 === 0) {
            countOfEven++;

        } else {
            countOfOdd++;
        }
    }
}
  console.log("Четных " + countOfEven);
  console.log("Нечетных " + countOfOdd);
  console.log("Других значений " + countOfOther);
}


howMuch();