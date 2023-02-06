function solve(arr) {
  const ERROR_MSG = "Error: too many operands!";
  const ERROR_MSGTWO = 'Error: not enough operands!';
  const nums = [];

  const operations = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "*": (a, b) => b * a,
    "/": (a, b) => b / a,
  };

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (typeof element === "number") {
      nums.push(element);
    } else {
      if (nums.length < 2) {
        return ERROR_MSGTWO;
      }
      nums.push(operations[element](nums.pop(), nums.pop()));
    }
  }

  if (nums.length != 1) {
    return ERROR_MSG;
  }
  return nums[0];
}
console.log(solve([3, 4, "+"]));
console.log(solve([5, 3, 4, "*", "-"]));
console.log(solve([7, 33, 8, "-"]));
