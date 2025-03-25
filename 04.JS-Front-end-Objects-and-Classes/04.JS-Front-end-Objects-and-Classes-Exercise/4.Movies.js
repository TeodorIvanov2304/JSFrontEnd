function movies(commands) {
    let movieList = [];

    for (let command of commands) {
        if (command.startsWith('addMovie ')) {
            let movieName = command.replace('addMovie ', '');
            movieList.push({ name: movieName });

        } else if (command.includes(' directedBy ')) {
            let [movieName, director] = command.split(' directedBy ');
            let movie = movieList.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }

        } else if (command.includes(' onDate ')) {
            let [movieName, date] = command.split(' onDate ');
            let movie = movieList.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }

    //Get only the movies with name, director and date
    let completedMovies = movieList.filter(m => m.name && m.director && m.date);

    //Turn each movie to JSON
    completedMovies.forEach(movie => console.log(JSON.stringify(movie)));
}

movies([
  'addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  'Batman onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen',
]);

movies([
  'addMovie The Avengers',
  'addMovie Superman',
  'The Avengers directedBy Anthony Russo',
  'The Avengers onDate 30.07.2010',
  'Captain America onDate 30.07.2010',
  'Captain America directedBy Joe Russo',
]);
