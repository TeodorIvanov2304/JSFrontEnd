function towns(townsArr){
    // class Town {
    //     constructor(name, latitude, longtitude){
    //         this.town = name;
    //         this.latitude = latitude;
    //         this.longtitude = longtitude;
    //     }
    // }

    for(let item of townsArr){
        let [town,latitude,longitude] = item.split(' | ');
        let city = {
            town,
            latitude,
            longitude: longitude
        };

        city.latitude = Number(latitude).toFixed(2);
        city.longitude = Number(longitude).toFixed(2);
        console.log(city);
    }

}

towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);
towns(['Plovdiv | 136.45 | 812.575']);
