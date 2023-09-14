// 1. Search Box Handler
// Ambil elemen card film
const movieCards = document.querySelectorAll(".card");
// Ambil input search
const searchInput = document.querySelector(".form-control");

// Event listener untuk input search
searchInput.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase(); // teks search dalam huruf kecil

  movieCards.forEach(function (card) {
    const movieTitle = card
      .querySelector(".card-title")
      .textContent.toLowerCase(); // judul film dalam huruf kecil

    // Cek judul film apakah sama dengan teks
    if (movieTitle.includes(searchTerm)) {
      card.style.display = "block"; // Tampilkan film
    } else {
      card.style.display = "none"; // Sembunyikan film yang tidak sesuai
    }
  });
});

// 2. Kategori Select Handler
// Filter film berdasarkan kategori
function filterMovies() {
  var selectedCategory = document.getElementById("kategori-select").value;
  var movies = document.querySelectorAll(".card"); // elemen card film

  movies.forEach(function (movie) {
    var movieCategory = movie.querySelector(".kategori").textContent;

    // Tampilkan film jika kategori yang dipilih sesuai dengan kategori film
    if (selectedCategory === "Kategori" || selectedCategory === movieCategory) {
      movie.style.display = "block"; // Tampilkan film
    } else {
      movie.style.display = "none"; // Sembunyikan film
    }
  });
}

// Event Listener untuk kategori select box
var kategoriSelect = document.getElementById("kategori-select");
kategoriSelect.addEventListener("change", filterMovies);

// 3. Rating Select Handler
// Filter film berdasarkan rating
function filterMoviesByRating() {
  var selectedRating = document.getElementById("rating-select").value;
  var movies = document.querySelectorAll(".card"); // elemen card film

  movies.forEach(function (movie) {
    var movieRating = movie.querySelector(".rating-score").textContent;
    movieRating = parseFloat(movieRating);

    // Tampilkan film jika rating yang dipilih sesuai dengan rating film
    if (
      selectedRating === "Rating" ||
      checkRating(movieRating, selectedRating)
    ) {
      movie.style.display = "block"; // Tampilkan film
    } else {
      movie.style.display = "none"; // Sembunyikan film
    }
  });
}

// memeriksa apakah rating film sesuai dengan rating select
function checkRating(movieRating, selectedRating) {
  switch (selectedRating) {
    case "8-10":
      return movieRating >= 8 && movieRating <= 10;
    case "6-8":
      return movieRating >= 6 && movieRating < 8;
    case "4-6":
      return movieRating >= 4 && movieRating < 6;
    case "less-than-4":
      return movieRating < 4;
    default:
      return false;
  }
}

// Event Listener untuk rating select box
var ratingSelect = document.getElementById("rating-select");
ratingSelect.addEventListener("change", filterMoviesByRating);
