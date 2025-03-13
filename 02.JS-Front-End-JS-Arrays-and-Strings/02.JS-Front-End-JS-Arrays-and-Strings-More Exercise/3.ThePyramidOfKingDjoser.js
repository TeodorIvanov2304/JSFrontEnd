function solve(base, increment) {
  let stoneRequired = 0;
  let marbleRequired = 0;
  let lapisLazuliRequired = 0;
  let goldRequired = 0;
  let heightCounter = 0;

  for (let i = base; i > 0; i -= 2) {
    heightCounter++;
    let stoneLayer = 0;

    if (i != 1 && i != 2) {
      stoneLayer = (i - 2) * (i - 2) * increment;
    }
    stoneRequired += stoneLayer;

    let outerLayer = (i * i - (i - 2) * (i - 2)) * increment;

    if (i == 1 || i == 2) {
      goldRequired += i * i * increment;
    } else if (heightCounter % 5 == 0) {
      lapisLazuliRequired += outerLayer;
    } else {
      marbleRequired += outerLayer;
    }
  }
  console.log(`Stone required: ${Math.ceil(stoneRequired)}`);
  console.log(`Marble required: ${Math.ceil(marbleRequired)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequired)}`);
  console.log(`Gold required: ${Math.ceil(goldRequired)}`);
  console.log(`Final pyramid height: ${Math.floor(heightCounter * increment)}`);
}

solve(11, 1);
console.log("-----------------------");
solve(11, 0.75);
console.log("-----------------------");
solve(12, 1);
console.log("-----------------------");
solve(23, 0.5);

console.log("*********************");

function solve2(base, increment) {
  let stoneRequired = 0;
  let marbleRequired = 0;
  let lapisLazuliRequired = 0;
  let goldRequired = 0;
  let heightCounter = 0;

  for (let i = base; i > 0; i -= 2) {
    heightCounter++;

    if (i != 1 && i != 2) {
      stoneRequired += (i - 2) * (i - 2) * increment;
    }

    let outerLayer = (i * i - (i - 2) * (i - 2)) * increment;

    if (i == 1 || i == 2) {
      goldRequired += i * i * increment;
    } else if (heightCounter % 5 == 0) {
      lapisLazuliRequired += outerLayer;
    } else {
      marbleRequired += outerLayer;
    }
  }
  console.log(`Stone required: ${Math.ceil(stoneRequired)}`);
  console.log(`Marble required: ${Math.ceil(marbleRequired)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequired)}`);
  console.log(`Gold required: ${Math.ceil(goldRequired)}`);
  console.log(`Final pyramid height: ${Math.floor(heightCounter * increment)}`);
}

solve2(11, 1);
console.log("-----------------------");
solve2(11, 0.75);
console.log("-----------------------");
solve2(12, 1);
console.log("-----------------------");
solve2(23, 0.5);

console.log("*********************");

function solve3(base, step) {
    
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let size;
    let count = 1;
    //Stop the loop before the last step
    for (size = base; size > 2; size-=2) {

        stone += (size - 2) ** 2;
        let cover = (size - 1) * 4;

        if (count % 5 == 0) {
            lapis += cover;
        }
        else {
            marble += cover;
        }

        count++;
    }

    let gold = size ** 2;

    console.log(`Stone required: ${Math.ceil(stone * step)}`);
    console.log(`Marble required: ${Math.ceil(marble * step)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * step)}`);
    console.log(`Gold required: ${Math.ceil(gold * step)}`);
    console.log(`Final pyramid height: ${Math.floor(count * step)}`);
  }
  
  solve3(11, 1);
  console.log("-----------------------");
  solve3(11, 0.75);
  console.log("-----------------------");
  solve3(12, 1);
  console.log("-----------------------");
  solve3(23, 0.5);
