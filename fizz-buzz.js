for (var i = 1; i < 101; i++) {
    let isFizz = Number.isInteger(i / 3);
    let isBuzz = Number.isInteger(i / 5);
    let message = i;
    if (isFizz && isBuzz) {
        message = 'fizzbuzz';
    }
    else if (isFizz) {
        message = 'fizz';
    }
    else if (isBuzz) {
        message = 'buzz';
    }

    console.log(message);

}
