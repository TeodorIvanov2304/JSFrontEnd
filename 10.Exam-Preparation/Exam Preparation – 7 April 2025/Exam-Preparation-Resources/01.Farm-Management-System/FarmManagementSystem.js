function farmManagementSystem(input){

    let farmArea = {};
    let farmTasks = {};

    let n = Number(input.shift());

    for(let i = 0;i < n; i++){
        let tokens = input[i].split(' ');
        let name = tokens[0];
        let area = tokens[1];
        farmArea[name] = area;

        let tasks = tokens[2].split(',');

        farmTasks[name] = tasks;
    }

    for(let i = n; i < input.length; i++ ){

        if(input[i].startsWith('End')){
            break;
        }

        if(input[i].startsWith('Execute')){
            let [command, name, area,task] = input[i].split(' / ');
            if(farmArea[name] == area && farmTasks[name].includes(task)){
                console.log(`${name} has executed the task: ${task}!`)
            } else {
                console.log(`${name} cannot execute the task: ${task}.`)
            }
        } else if(input[i].startsWith('Learn Task')){
            let [command, name,task] = input[i].split(' / ');
            if(farmTasks[name].includes(task)){
                console.log(`${name} already knows how to perform ${task}.`)
            } else {
                farmTasks[name].push(task);
                console.log(`${name} has learned a new task: ${task}.`);
            }
        }
        else if(input[i].startsWith('Change Area')){
            let [command, name, area] = input[i].split(' / ');
            farmArea[name] = area;
            console.log(`${name} has changed their work area to: ${area}`);
        }

    }

    let ordered = Object.keys(farmTasks);

    for (let farmer of ordered) {
        let sortedTasks = farmTasks[farmer].slice().sort();
        console.log(`Farmer: ${farmer}, Area: ${farmArea[farmer]}, Tasks: ${sortedTasks.join(', ')}`);
    }
}

farmManagementSystem([
    '2',
    'John garden watering,weeding',
    'Mary barn feeding,cleaning',
    'Execute / John / garden / watering',
    'Execute / Mary / garden / feeding',
    'Learn Task / John / planting',
    'Execute / John / garden / planting',
    'Change Area / Mary / garden',
    'Execute / Mary / garden / cleaning',
    'End'
  ]
  );
farmManagementSystem([
    '3',
    'Alex apiary harvesting,honeycomb',
    'Emma barn milking,cleaning',
    'Chris garden planting,weeding',
    'Execute / Alex / apiary / harvesting',
    'Learn Task / Alex / beeswax',
    'Execute / Alex / apiary / beeswax',
    'Change Area / Emma / apiary',
    'Execute / Emma / apiary / milking',
    'Execute / Chris / garden / watering',
    'Learn Task / Chris / pruning',
    'Execute / Chris / garden / pruning',
    'End'
  ]
  );
