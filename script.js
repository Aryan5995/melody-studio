const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('carousel__item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}
// script.js

// Sample data (you can replace this with data fetched from a server)
const playlist = [
  { number: "01", title: "Admirin You", artist: "Karan Aujla", image: "images/Songs/AdmirinYou.jpg" },
  { number: "02", title: "Peaches", artist: "Justin Bieber", image: "images/Songs/Peaches.jpeg" },
  { number: "03", title: "7 Rings", artist: "Ariana Grande", image: "images/Songs/7rings.jpg" },
  { number: "04", title: "Attention", artist: "Charlie Puth", image: "images/Songs/Attention.jpeg" },
  { number: "05", title: "Soulmate", artist: "Arijit Singh", image: "images/Songs/Soulmate.jpg" },
  { number: "06", title: "Girls like You", artist: "Maroon 5", image: "images/Songs/GirlslikeYou.jpg" },
  { number: "07", title: "Unstoppable", artist: "Sia", image: "images/Songs/Unstoppable.jpg" },
  { number: "08", title: "Toxic", artist: "AP Dhillon", image: "images/Songs/Toxic.jpg" },
  { number: "09", title: "Shape Of You", artist: "Ed Sheeran", image: "images/Songs/Shape_Of_You.png" },
  { number: "10", title: "Cheap Thrills", artist: "Sia", image: "images/Songs/CheapThrills.jpg" },
];

const similarArtists = [
  { name: "Karan Aujla", date: "AUG 11, 2017", imageClass: "imgkaran" },
  { name: "Arijit Singh", date: "AUG 11, 2017", imageClass: "imgarijit" },
  { name: "AP Dhillon", date: "AUG 11, 2017", imageClass: "imgap" },
];

const recentlyPlayed = [
  { number: "01", title: "Toxic", artist: "AP Dhillon", image: "images/Songs/Toxic.jpg" },
  { number: "02", title: "Calm Down", artist: "Rema", image: "images/Songs/CalmDown.jpeg" },
  { number: "03", title: "Cheap Thrills", artist: "Sia", image: "images/Songs/CheapThrills.jpg" },
  { number: "04", title: "Admirin You", artist: "Karan Aujla", image: "images/Songs/AdmirinYou.jpg" },
  { number: "05", title: "Tum Se", artist: "Varun Jain", image: "images/Songs/TumSe.jpg" },
];

// Function to generate song queue
function generateSongQueue() {
  const queueContainer = document.querySelector('#queue-1 .queue-elements-container2');
  queueContainer.innerHTML = ''; // Clear existing content

  playlist.forEach(song => {
      const songElement = document.createElement('div');
      songElement.className = 'queue-element2';
      songElement.innerHTML = `
          <div class="song-image-container">
              <p class="queue-number2">${song.number}</p>
              <img src="${song.image}" alt="${song.title}">
          </div>
          <div class="song-details-container">
              <div class="song-details">
                  <p class="song-title2">${song.title}</p>
                  <p class="song-artist2">${song.artist}</p>
              </div>
              <div class="like-icon">
                  <i class="fas fa-heart"></i>
              </div>
          </div>
      `;
      queueContainer.appendChild(songElement);
  });
}

// Function to generate similar artists
function generateSimilarArtists() {
  const artistsContainer = document.querySelector('.similar-artist-cards-container');
  artistsContainer.innerHTML = ''; // Clear existing content

  similarArtists.forEach(artist => {
      const artistElement = document.createElement('div');
      artistElement.className = 'similar-artist-card';
      artistElement.innerHTML = `
          <div class="image-container2 ${artist.imageClass}"></div>
          <div class="artist-info">
              <p class="artist-name">${artist.name}</p>
              <p class="artist-date">${artist.date}</p>
          </div>
      `;
      artistsContainer.appendChild(artistElement);
  });
}

// Function to generate recently played songs
function generateRecentlyPlayed() {
  const recentlyPlayedContainer = document.querySelector('#queue-2 .queue-elements-container2');
  recentlyPlayedContainer.innerHTML = ''; // Clear existing content

  recentlyPlayed.forEach(song => {
      const songElement = document.createElement('div');
      songElement.className = 'queue-element2';
      songElement.innerHTML = `
          <div class="song-image-container">
              <p class="queue-number2">${song.number}</p>
              <img src="${song.image}" alt="${song.title}">
          </div>
          <div class="song-details-container">
              <div class="song-details">
                  <p class="song-title2">${song.title}</p>
                  <p class="song-artist2">${song.artist}</p>
              </div>
              <div class="like-icon">
                  <i class="fas fa-heart"></i>
              </div>
          </div>
      `;
      recentlyPlayedContainer.appendChild(songElement);
  });
}

// Initialize page content
document.addEventListener('DOMContentLoaded', () => {
  generateSongQueue();
  generateSimilarArtists();
  generateRecentlyPlayed();
});
