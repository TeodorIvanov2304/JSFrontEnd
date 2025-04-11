function spaceExploration(input){
    let n = Number(input.shift());
    let astronautArea = {};
    let astronautSkills = {};

    for(let i = 0; i < n; i++){
        let tokens = input.shift();
        let[name,area,skills] = tokens.split(' ');
        astronautArea[name] = area;
        astronautSkills[name] = skills.split(',');   
    }

    let commands = input;

    while (commands.length > 0) {
        let tokens = commands.shift();
        if (tokens === 'End') {
            break;
        }

        let actions = tokens.split(' / ');
        let name;
        let area;
        let skill;

        if(actions[0] == 'Perform'){
            name = actions[1];
            area = actions[2];
            skill = actions[3];

            if(astronautArea[name] == area && astronautSkills[name].includes(skill)){
                console.log(`${name} has successfully performed the skill: ${skill}!`)
            } else{
                console.log(`${name} cannot perform the skill: ${skill}.`)
            }

        } else if(actions[0] == 'Learn Skill'){
            name = actions[1];
            skill = actions[2];
            if(astronautSkills[name].includes(skill)){
                console.log(`${name} already knows the skill: ${skill}.`)
            } else {
                astronautSkills[name].push(skill);
                console.log(`${name} has learned a new skill: ${skill}.`)
            }

        } else if(actions[0] == 'Transfer'){
            name = actions[1];
            area = actions[2];
            astronautArea[name] = area;
            console.log(`${name} has been transferred to: ${area}`)
        }

    }

    let orderedAstronauts = Object.keys(astronautSkills);

    for(let astronaut of orderedAstronauts){
        let sortedSkills = astronautSkills[astronaut].sort();
        console.log(`Astronaut: ${astronaut}, Section: ${astronautArea[astronaut]}, Skills: ${sortedSkills.join(', ')}`);
    }
}

spaceExploration([
    "2",
    "Alice command_module piloting,communications",
    "Bob engineering_bay repair,maintenance",
    "Perform / Alice / command_module / piloting",
    "Perform / Bob / command_module / repair",
    "Learn Skill / Alice / navigation",
    "Perform / Alice / command_module / navigation",
    "Transfer / Bob / command_module",
    "Perform / Bob / command_module / maintenance",
    "End"
  ]
  );

  spaceExploration([
    "3",
    "Tom engineering_bay construction,maintenance",
    "Sara research_lab analysis,sampling",
    "Chris command_module piloting,communications",
    "Perform / Tom / engineering_bay / construction",
    "Learn Skill / Sara / robotics",
    "Perform / Sara / research_lab / robotics",
    "Transfer / Chris / research_lab",
    "Perform / Chris / research_lab / piloting",
    "Learn Skill / Tom / diagnostics",
    "Perform / Tom / engineering_bay / diagnostics",
    "End"
  ]
  );