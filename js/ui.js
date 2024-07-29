import { elements } from "./helpers.js";

export const renderSongs = (songs) => {

  elements.list.innerHTML = "";
  songs.forEach((song) => {
    
    const div = document.createElement("div");
    div.dataset.url = song.uri;
    div.dataset.title = song.album?.name;
    div.dataset.img = song.coverart.sources[0].url;
        
    div.className = "card";
    div.innerHTML = `      
    <figure>
        <img
        src="${song.coverart.sources[0].url}"
        alt=""
        />
        <div class="play">
        <i class="bi bi-play-fill" id="play-btn"></i>
        </div>
    </figure>
    <h4>${song.artists.items[0].profile.name}</h4>
    <h4>${song.name}</h4>`;
    elements.list.appendChild(div);
  });
};

export const renderPlayingInfo = (song) => {
  
  elements.playingInfo.innerHTML = `
  <img
  src="${song.coverArt.sources[2]}"
  id="info-img"
  class=""
  alt=""
  />
  <div>
    <p>Şu an oynatılıyor...</p>
    <h3>${song.name}</h3>
  </div>
  
  `;
};

export const updateTitle = (message) => {
  elements.title.innerText = message;
};
