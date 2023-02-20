function solve(numbers,start, end){

    if(!Array.isArray(numbers)){
        return NaN;
    }
    
    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, numbers.length - 1);

    let subArr = numbers.slice(startIndex, endIndex + 1);

    let sum = subArr.reduce((a, x) => {
        return a + Number(x);
    }, 0) 
    
    return sum;

}
solve([10, 20, 30, 40, 50, 60], 3, 300);
solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);