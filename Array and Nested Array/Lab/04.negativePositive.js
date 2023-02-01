function solve(array){
    const result = [];

    for(let el of array){
        if (el < 0){
            result.unshift(el);
        } else {
            result.push(el);
        }
    }
    for(let el of result){
        console.log(el);
    }
}
solve([7, -2, 8, 9]);
solve([3, -2, 0, -1])