function calculator() {
    let inputOne;
    let inpurTwo;
    let result;

    function init (selector1, selector2, resultSelector){

        inputOne = document.querySelector(selector1);
        inpurTwo = document.querySelector(selector2);
        result = document.querySelector(resultSelector);
    }
    function add () {
        result.value = Number(inputOne.value) + Number(inpurTwo.value);
    }
    function subtract () {
        result.value = Number(inputOne.value) - Number(inpurTwo.value);

    }

    return {
        init,
        add,
        subtract
    }

}
const calculate = calculator ();  
calculate.init ('#num1', '#num2', '#result');  




