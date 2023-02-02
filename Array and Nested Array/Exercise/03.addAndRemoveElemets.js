function solve(array) {
    const newArr = [];
    let counter = 1;

    for(let i = 0; i < array.length; i++){
        const currCommand = array[i]
        if(currCommand === 'add'){
            newArr.push(counter++)
        } else if(currCommand === 'remove'){
            newArr.pop(counter++)
        }
    }
    if(!newArr.length){
        console.log('Empty');
    } else {
        console.log(newArr.join('\n'));
    }

}
solve(["add", "add", "add", "add"]);
solve(["add", "add", "remove", "add", "add"]);
solve(["remove", "remove", "remove"]);
