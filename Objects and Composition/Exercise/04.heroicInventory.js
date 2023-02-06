function solve(input) {
    let result = input.reduce((acc, curr) => {
        let [name,level,item] = curr.split(' / ');
        const hero = {
            name,
            level: Number(level),
            items: item ? item.split(', ') : []
        }
        acc.push(hero);
        return acc;
    }, [])

    return JSON.stringify(result);
}
console.log(solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]));
console.log('-----------------');
solve(['Jake / 1000 / Gauss, HolidayGrenade']);