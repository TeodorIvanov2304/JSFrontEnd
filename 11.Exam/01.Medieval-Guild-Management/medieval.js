function medieval(input) {
  const n = input.shift();

  let heroSkills = {};
  let heroRoles = {};

  for (let i = 0; i < n; i++) {
    let tokens = input.shift();
    let [name, role, skills] = tokens.split(' ');

    heroRoles[name] = role;
    heroSkills[name] = skills.split(',');
  }

  while (input) {
    let tokens = input.shift();

    if (tokens == 'End') {
      break;
    }

    let actions = tokens.split(' / ');
    let name;
    let role;
    let skill;

    if (actions[0] == 'Perform') {
      name = actions[1];
      role = actions[2];
      skill = actions[3];

      if (heroRoles[name] == role && heroSkills[name].includes(skill)) {
        console.log(`${name} has successfully performed the skill: ${skill}!`);
      } else {
        console.log(`${name} cannot perform the skill: ${skill}.`);
      }
    } else if (actions[0] == 'Reassign') {
      name = actions[1];
      role = actions[2];
      heroRoles[name] = role;
      console.log(`${name} has been reassigned to: ${role}`);
    } else if (actions[0] == 'Learn Skill') {
      name = actions[1];
      skill = actions[2];
      if (heroSkills[name].includes(skill)) {
        console.log(`${name} already knows the skill: ${skill}.`);
      } else {
        heroSkills[name].push(skill);
        console.log(`${name} has learned a new skill: ${skill}.`);
      }
    }
  }

  let orderedHeroes = Object.keys(heroSkills)

  for(let hero of orderedHeroes){
    let sortedSkills = heroSkills[hero].slice().sort();
    console.log(`Guild Member: ${hero}, Role: ${heroRoles[hero]}, Skills: ${sortedSkills.join(', ')}`);
  }
}

medieval([
  '3',
  'Arthur warrior swordsmanship,shield',
  'Merlin mage fireball,teleport',
  'Gwen healer healing,alchemy',
  'Perform / Arthur / warrior / swordsmanship',
  'Perform / Merlin / warrior / fireball',
  'Learn Skill / Gwen / purification',
  'Perform / Gwen / healer / purification',
  'Reassign / Merlin / healer',
  'Perform / Merlin / healer / teleport',
  'End',
]);
medieval([
  '4',
  'Lancelot knight jousting,swordplay',
  'Morgana sorceress dark_magic,illusion',
  'Robin archer archery,stealth',
  'Galahad paladin healing,swordplay',
  'Perform / Robin / archer / archery',
  'Perform / Morgana / knight / illusion',
  'Learn Skill / Lancelot / swordplay',
  'Learn Skill / Robin / tracking',
  'Learn Skill / Robin / tracking',
  'Reassign / Galahad / warrior',
  'Perform / Galahad / warrior / healing',
  'Reassign / Galahad / healer',
  'Perform / Galahad / healer / healing',
  'End',
]);
