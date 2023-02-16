function solve(input, string){

    if(string === 'asc'){
        input.sort((a, b) => {
            return a - b;
        });
    } else {
        input.sort((a, b) => {
            return b - a;
        });
    }
    return input;
}
solve([14, 7, 17, 6, 8], 'asc' );
solve([14, 7, 17, 6, 8], 'desc' );