function whatThenumber (number) {

    if (number > 1000) return "Данные неверны";
    if (number === 0) return  "0 - ненатуральное число";
    if (number === 1) return "1 - не простое число";

    let Count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) Count++;
    }

    if (Count === 2)
        return "Число простое";
        
    else
        return "Число не простое";
}

console.log(whatThenumber());




