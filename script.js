const movies = [
    { title: "3 IDiot", genre: "Comedy", rating: 8.8, releaseYear: 2024 },
    { title: "Chal Jivi Laye", genre: "Drama", rating: 8.5, releaseYear: 2023 },
    { title: "Shivaji The Boss", genre: "Action", rating: 9.2, releaseYear: 2000 }
];
const addMovie = (collection, movie) => {
    collection.push(movie);
    displayMovies(collection);
};

const listMoviesByGenre = (collection, genre) => {
    return collection.filter(movie => movie.genre === genre);
};

const searchMoviesByYear = (collection, year) => {
    return collection.filter(movie => movie.releaseYear === year);
};
const displayMovies = (collection) => {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = ''; 

    collection.forEach(movie => {
        const li = document.createElement('li');
        li.classList.add('bg-white', 'p-3', 'mb-2', 'rounded', 'shadow-sm');
        li.textContent = `${movie.title} (${movie.releaseYear}) - Genre: ${movie.genre} - Rating: ${movie.rating}`;
        movieList.appendChild(li);
    });
};
document.getElementById('movie-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const rating = parseFloat(document.getElementById('rating').value);
    const releaseYear = parseInt(document.getElementById('releaseYear').value);

    const newMovie = { title, genre, rating, releaseYear };
    addMovie(movies, newMovie);

    e.target.reset();
});
document.getElementById('genre-filter').addEventListener('change', (e) => {
    const genre = e.target.value;
    let filteredMovies = movies;

    if (genre) {
        filteredMovies = listMoviesByGenre(movies, genre);
    }

    const year = parseInt(document.getElementById('release-year-search').value);
    if (!isNaN(year)) {
        filteredMovies = searchMoviesByYear(filteredMovies, year);
    }

    displayMovies(filteredMovies);
});
document.getElementById('release-year-search').addEventListener('input', (e) => {
    const year = parseInt(e.target.value);
    const genre = document.getElementById('genre-filter').value;
    let filteredMovies = movies;

    if (genre) {
        filteredMovies = listMoviesByGenre(movies, genre);
    }

    if (!isNaN(year)) {
        filteredMovies = searchMoviesByYear(filteredMovies, year);
    }

    displayMovies(filteredMovies);
});
window.onload = () => {
    displayMovies(movies);
};