function solve(matrix) {
    let sumrow = 0;
    let sumCol = 0;

    for(let i = 0; i < matrix.length; i++){
        let currArr = matrix[i].join('');
        for (let j = 0; j < currArr.length; j++) {
            sumrow += Number(currArr[j]);
            sumCol += Number(currArr[0]);
        }
        
    }

    if(sumCol === sumrow){
        console.log('true');
    } else {
        console.log('false');
    }
}
solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
console.log("------------");
solve([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
console.log("------------");
solve([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
