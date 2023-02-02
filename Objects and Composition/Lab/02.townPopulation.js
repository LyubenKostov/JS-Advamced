function solve(array) {
    // init result collection
    const result = {};
    // parse input
    for(let line of array){
        const [name, population] = line.split(' <-> ');
      

        // chek if key exists
        if(name in result == false){
            result[name] = 0;
        } 
        result[name] += Number(population);
    }
    // print result
    console.log(Object
    .entries(result)
    .map(([name, population]) => `${name} : ${population}`)
    .join('\n'))
   
}
solve([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
