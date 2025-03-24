function songs(input) {
    class Song {

        constructor(type, name, duration) {
            this.type = type;
            this.name = name;
            this.duration = duration;
        }
    }

    let songs = [];
    let numberOfSongs = input.shift();
    let typeSong = input.pop();

    for(let i = 0; i < numberOfSongs; i++){
        let [type,name,duration] = input[i].split('_');
        let song = new Song(type,name,duration);
        songs.push(song);
    }

    if(typeSong == 'all') {
        songs.forEach((s) => console.log(s.name));
    } else {
        let filteredSongs = songs.filter((t) => t.type == typeSong);
        filteredSongs.forEach((s) => console.log(s.name));

    }
}

songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
