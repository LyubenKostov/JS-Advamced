function solve(arrayOfnumbers) {
    // let biggestNumber = arrayOfnumbers.shift();
    // const newArr = [biggestNumber];

    // for(const number of arrayOfnumbers){
    //     if(number >= biggestNumber){
    //         biggestNumber = number;
    //         newArr.push(number);
    //     }
    // }
    // return newArr;

    
    let biggestNum = arrayOfnumbers[0];
    return arrayOfnumbers.reduce((acc, currElement) => {
        if(biggestNum <= currElement){
            acc.push(currElement);
            biggestNum = currElement;
        }
        return acc;
    }, [])
   
}
console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log('---------------');
solve([1, 2, 3, 4]);
console.log('---------------');
solve([20, 3, 2, 15, 6, 1]);