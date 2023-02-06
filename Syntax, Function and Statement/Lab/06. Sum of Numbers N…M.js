function sumOfNumberNtoM (n, m) {
    let sum = 0;
    let nAsNumber = Number(n);
    let mAsNumber = Number(m);

    for(let i = nAsNumber; i <= mAsNumber; i++){
        sum += i;
    }

    console.log(sum)
}