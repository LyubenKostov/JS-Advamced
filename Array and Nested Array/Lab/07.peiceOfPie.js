function solve(arr, startFlovar, endFlavor){
    const start = arr.indexOf(startFlovar);
    const end  = arr.indexOf(endFlavor);

    const result = arr.slice(start, end + 1);

    return result;
}
solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie')