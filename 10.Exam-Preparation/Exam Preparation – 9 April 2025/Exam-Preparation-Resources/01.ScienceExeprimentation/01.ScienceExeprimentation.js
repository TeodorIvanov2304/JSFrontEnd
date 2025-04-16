function scienseExeprimentation(input) {
    let n = Number(input.shift());
    let lab = {};

    for(let i = 0; i < n; i++){
        let line = input.shift();
        let [name, quantity] = line.split(' # ');
        quantity = Number(quantity);

        lab[name] = {
            quantity,
            formula: null
        };
    }

    while(input[0] != 'End'){
        let line = input.shift();
        let tokens = line.split(' # ');
        let command = tokens.shift();

        if(command == 'Mix'){
            let [c1, c2, quantity] = tokens;
            quantity = Number(quantity);

            if(lab[c1].quantity < quantity || lab[c2].quantity < quantity){
                console.log(`Insufficient quantity of ${c1}/${c2} to mix.`);
                continue;
            }
            

            lab[c1].quantity -= quantity;
            lab[c2].quantity -= quantity;
            console.log(`${c1} and ${c2} have been mixed. ${quantity} units of each were used.`);

        } else if(command == 'Replenish'){
            let [name, quantity] = tokens;
            quantity = Number(quantity);

            if(!lab.hasOwnProperty(name)){
                console.log(`The Chemical ${name} is not available in the lab.`);
                continue;
            }

            let data = lab[name];

            if(data.quantity + quantity >= 500 ){
                let added = 500 - data.quantity;
                data.quantity = 500;
                console.log(`${name} quantity increased by ${added} units, reaching maximum capacity of 500 units!`);
            } else {
                data.quantity += quantity;
                console.log(`${name} quantity increased by ${quantity} units!`);
            }
        } else if(command == 'Add Formula'){
            let [name, formula] = tokens;

            if(!lab.hasOwnProperty(name)){
                console.log(`The Chemical ${name} is not available in the lab.`);
                continue;
            }

            let data = lab[name];
            data.formula = formula;

            console.log(`${name} has been assigned the formula ${formula}.`)
        }
    }

    let result = [];

    for(let [name,data] of Object.entries(lab)){
        let output = [`Chemical: ${name}, Quantity: ${data.quantity}`];

        if(data.formula){
            output.push(`Formula: ${data.formula}`)
        }

        result.push(output.join(`, `));
    }

    console.log(result.join('\n'));
}

scienseExeprimentation([
  "4",
  "Water # 200",
  "Salt # 100",
  "Acid # 50",
  "Base # 80",
  "Mix # Water # Salt # 50",
  "Replenish # Salt # 150",
  "Add Formula # Acid # H2SO4",
  "End",
]);

console.log('----------------------');

scienseExeprimentation([
  "3",
  "Sodium # 300",
  "Chlorine # 100",
  "Hydrogen # 200",
  "Mix # Sodium # Chlorine # 200",
  "Replenish # Sodium # 250",
  "Add Formula # Sulfuric Acid # H2SO4",
  "Add Formula # Sodium # Na",
  "Mix # Hydrogen # Chlorine # 50",
  "End",
]);
