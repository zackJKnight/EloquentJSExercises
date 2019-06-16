for(var i = 1; i < 101; i++) {
    let isFizz = Number.isInteger(i / 3);
    let isBuzz = Number.isInteger(i / 5);
if(isFizz && isBuzz){
    console.log('fizzbuzz');
    continue;
}
else if(isFizz){
    console.log('fizz');
    continue;
}
else if(isBuzz){
    console.log('buzz');
    continue;
}

console.log(i);

}