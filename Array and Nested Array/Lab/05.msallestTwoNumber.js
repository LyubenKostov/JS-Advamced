function solve(arr){
    let result = [];
    let sortedArr = arr.sort((a, b) => a - b);

    let firstSmall = sortedArr.shift();
    let secondSmall = sortedArr.shift();

    result.push(firstSmall, secondSmall)


    console.log(result.join(' '));
}
solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);