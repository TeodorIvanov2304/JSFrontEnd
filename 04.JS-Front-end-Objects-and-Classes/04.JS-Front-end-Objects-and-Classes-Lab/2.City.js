function city(city) {
  let cityEntries = Object.entries(city);

  for (let entry of cityEntries) {
    //entry[0] stands for key, entry[1] for value
    console.log(`${entry[0]} -> ${entry[1]}`);
  }
}

city({
  name: 'Sofia',
  area: 492,
  population: 1238438,
  country: 'Bulgaria',
  postCode: '1000',
});
city({
  name: 'Plovdiv',
  area: 389,
  population: 1162358,
  country: 'Bulgaria',
  postCode: '4000',
});

console.log('*********************');

function city2(city) {
  let cityEntries = Object.entries(city);

  for (let [key, value] of cityEntries) {
    console.log(`${key} -> ${value}`);
  }
}

city2({
  name: 'Sofia',
  area: 492,
  population: 1238438,
  country: 'Bulgaria',
  postCode: '1000',
});
city2({
  name: 'Plovdiv',
  area: 389,
  population: 1162358,
  country: 'Bulgaria',
  postCode: '4000',
});
