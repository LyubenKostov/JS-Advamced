function circleArea (argument){
    let result;

    let type = typeof (argument);

    if (type === 'number'){
        result = Math.pow(argument, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }
}