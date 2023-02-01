function solve(matrix){
    let main = 0;
    let secondary = 0;

    for (let i  = 0; i < matrix.length; i++){
        main += matrix[i][i];
        secondary += matrix[i][matrix.length - i - 1];
    }
    console.log(main,secondary);
}
solve([[20, 40],
      [10, 60]]);
console.log('------------------');
solve([[3, 5, 17],
      [-1, 7, 14],
      [1, -8, 89]]);