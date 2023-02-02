function solve(arrOfName){
    // let count = 1;
    // let sortetArr = arrOfName.sort((a, b) => {
    //     return a.localeCompare(b);
    // })

    // for(let el of sortetArr){
    //     console.log(`${count}.${el}`);
    //     count++;
    // }

    arrOfName.sort((a, b) => {
        return a.localeCompare(b);
    })
    .forEach((el, i) => {
        console.log(`${i + 1}.${el}`);
    })
}
solve(["John", "Bob", "Christina", "Ema"]);