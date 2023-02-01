function firstLast(arr){
    let first = arr.shift();
    let last = arr.pop();
    let result = Number(first) + Number(last);

    return result;
}
console.log(firstLast(['20', '30', '40']))