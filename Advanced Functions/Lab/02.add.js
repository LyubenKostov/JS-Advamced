function solution(num){
    function add (n){
        n += num;
        return n;
    }
    return add
}
let add5 = solution(5);

console.log(add5(2));

console.log(add5(3));