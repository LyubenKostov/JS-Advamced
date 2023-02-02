function solve(dataAsJson){
    const result = [];
    result.push('<table>');

    const data = JSON.parse(dataAsJson);

    // Collect prop names (keys)
    const props = Object.keys(data[0]);
    
    result.push(`  <tr>${props.map(p => `<th>${p}</th>`).join('')}</tr>`);
    // Create table headers from names
    // Create rows for entry in collection
    for(let entry of data){
    result.push(`  <tr>${props.map(p => `<td>${entry[p]}</td>`).join('')}</tr>`);

    }
    // Output table
    result.push('</table>');

    return result.join('\n');

}
// console.log(solve(`[{"Name":"Stamat",
// "Score":5.5},
// {"Name":"Rumen",
// "Score":6}]`))
//console.log('---------------');
solve(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`)