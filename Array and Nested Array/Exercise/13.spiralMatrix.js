function solve(row, col){
    let num = 1;
    let finalArr = [];

    for (let i = 0; i < row; i++) {
        let currArray = [];
        currArray.length = col;
        finalArr.push(currArray);
    };
    let startingRowIndex = 0;
    let startColIndex = 0;

    while(startingRowIndex < row && startColIndex < col){
        for (let i = startColIndex; i < col; ++i) {
            finalArr[startingRowIndex][i] = num++
        }
        startingRowIndex++;
        for(let i = startingRowIndex; i < row; i++){
            finalArr[i][col - 1] = num++;
        }
        col--;
        if(startingRowIndex < row){
            for (let i = col - 1; i >= startColIndex; --i) {
                finalArr[row - 1][i] = num++;
            }
            row--;
        }
        if(startColIndex < col){
            for (let i = row - 1; i >= startingRowIndex; --i) {
                finalArr[i][startColIndex] = num++;
            }
            startColIndex++;
        }
    }

    finalArr.forEach((row) => console.log(row.join(' ')));

}
solve(5, 5);
solve(3, 3);