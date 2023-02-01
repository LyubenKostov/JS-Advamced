function stringLength (stringOne, stringTwo, stringThree){
    let stringOneL = stringOne.length;
    let stringThreeL = stringThree.length;

    let sumOfLength = stringOneL + stringTwoL + stringThreeL;

    let avgStringLength = Math.floor(sumOfLength / 3);

    console.log(sumOfLength);
    console.log(avgStringLength);
}
stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');