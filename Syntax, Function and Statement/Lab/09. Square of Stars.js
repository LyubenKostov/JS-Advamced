function squareOfStars (num){
    let res = '';
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++) {
            res = res + " " + "*"
        }
        res = res + "\n"
    }

    console.log(res)
}