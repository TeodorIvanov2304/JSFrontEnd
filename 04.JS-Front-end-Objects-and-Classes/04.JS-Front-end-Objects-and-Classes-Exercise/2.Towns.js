function towns(townsArr){

    for(let item of townsArr){
        let [town,latitude,longitude] = item.split(' | ');
        let currentTown = {
            town,
            latitude,
            longitude: longitude
        };

        currentTown.latitude = Number(latitude).toFixed(2);
        currentTown.longitude = Number(longitude).toFixed(2);
        console.log(currentTown);
    }

}

towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);
towns(['Plovdiv | 136.45 | 812.575']);
