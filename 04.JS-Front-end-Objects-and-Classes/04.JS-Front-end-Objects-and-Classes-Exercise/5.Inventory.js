//With class Hero
function inventory(heroes) {
    class Hero {
        constructor(heroName, level, items){
            this.heroName = heroName;
            this.level = Number(level);
            this.items = items;
        }
    }

    let listOfHeroes = [];

    for(let hero of heroes){
        let tokens = hero.split(' / ');
        let currentHero = new Hero(
            heroName = tokens[0],
            level = tokens[1],
            items = tokens[2]

        );
        listOfHeroes.push(currentHero);
    }

    let orderedHeroesByLevel = listOfHeroes.sort((a,b) => a.level - b.level);

    for(let hero of orderedHeroesByLevel){
        console.log(`items => ${hero.items}`);
        console.log(`level => ${hero.level}`);
        console.log(`Hero: ${hero.heroName}`);
    }

}

inventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);
inventory([
  'Batman / 2 / Banana, Gun',
  'Superman / 18 / Sword',
  'Poppy / 28 / Sentinel, Antara',
]);

console.log('**************************');

//With object
function inventory(heroes) {
 
    let listOfHeroes = [];

    for(let hero of heroes){
        let [name, level, items] = hero.split(' / ');
        level = Number(level);

        let currentHero = {
            name,
            level,
            items
        };

        listOfHeroes.push(currentHero);
    }

    let orderedHeroesByLevel = listOfHeroes.sort(compareLevels);

    for(let hero of orderedHeroesByLevel){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }

    function compareLevels(a,b){
        return a.level - b.level;
    }
}

inventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);
inventory([
  'Batman / 2 / Banana, Gun',
  'Superman / 18 / Sword',
  'Poppy / 28 / Sentinel, Antara',
]);
