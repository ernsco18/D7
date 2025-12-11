/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
let str1 = "Ernesto";
let str2 = "Scorzelli";
function concatenare(str1, str2) {
  const new_str1 = str1.slice(0, 2);
  const new_str2 = str2.slice(-3);
  let stringa = new_str1.concat(new_str2);

  return stringa;
}

console.log(concatenare(str1, str2));
/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
let n = 10;
function rand_array(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * 99);
  }
  return array;
}
console.log(rand_array(n));
/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
function odd(n) {
  let array = rand_array(n);
  console.log(array);
  for (let i = 0; i < n; i++) {
    if (array[i] % 2 !== 0) {
      array.splice(i, 1);
    }
  }
  return array;
}
console.log(odd(n));
/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
const somma = (array) => {
  let somma = 0;
  array.forEach((element) => {
    somma += element;
  });
  return somma;
};
console.log(somma([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
const reduceSommaNumeri = (array) => {
  return array.reduce((accumulatore, elemento_corrente) => accumulatore + elemento_corrente, 0);
};

console.log(reduceSommaNumeri([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
const newArray = (array, n) => {
  return array.map((element) => element + n);
};
/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
const lunghezza = (array) => {
  return array.map((element) => element.lenght);
};
/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
const odds = () => {
  const array = [];
  for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
      array.push(i);
    }
  }
  return array;
};
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
const oldestMovie = (array) => {
  let result = { Year: 2100 };
  array.forEach((movie) => {
    let currentYear = parseInt(movie.Year);
    if (currentYear < result.Year) {
      result = movie;
    }
  });

  return result;
};

console.log(oldestMovie(movies));
/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
const countMovies = (array) => {
  return array.length;
};

console.log(countMovies(movies));
/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
const filmNames = (array) => {
  let names = [];
  array.forEach((array) => {
    names.push(array.Title);
  });
  return names;
};
console.log(filmNames(movies));
/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
const millennial = (array) => {
  return array.filter((movies) => {
    return parseInt(movies.Year) > 1999;
  });
};
console.log(millennial(movies));
/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
const sum = (array) => {
  return array.reduce((acc, curr) => acc + parseInt(curr.Year), 0);
};

console.log(sum(movies));
/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
const getMovieById = function (array, id) {
  return array.find((elem) => elem.imdbID === id);
};
/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
const getMovieByYear = function (array, year) {
  return array.findIndex((elem) => parseInt(elem.Year) === year);
};

console.log(getMovieByYear(movies, 2005));
