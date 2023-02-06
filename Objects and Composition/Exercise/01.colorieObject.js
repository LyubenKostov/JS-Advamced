function solve(input){
    // let obj = {};

    // for(let i  = 0; i < input.length; i++){
    //     if(i %  2 === 0){
    //         obj[input[i]] = Number(input[i + 1]);
    //     }
    // }

    // console.log(obj);
    
    return input.reduce((acc, curr, index) => {
        if(index % 2 === 0){
            acc[curr] = Number(input[index + 1]);
        }
        return acc;
    }, {})
}
console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);