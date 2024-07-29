import { renderSongs } from "./ui.js";

const url = 'https://spotify-web2.p.rapidapi.com/search/?q=Search%20query&type=multi&offset=0&limit=10&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd056082667msh5d48826fbae7be4p1fe68fjsn9015ad8ca90c',
		'X-RapidAPI-Host': 'spotify-web2.p.rapidapi.com'
	}
};


export class API {
  constructor() {
    this.songs = [];
  }
 

  async getPopular() {
    const res = await fetch(url, options);
    const data = await res.json();

  

    this.songs = data.tracks;

    renderSongs(this.songs);
  }

  async searchMusic(query) {
    const res = await fetch(`https://spotify-web2.p.rapidapi.com/search/?q=${query}&type=multi&offset=0&limit=10&numberOfTopResults=5`,options)
    const data = await res.json();
    
    
    let newData = data.albums.items;
   
    
    newData = newData.map((song) => ({ ...song.data }));

    console.log(newData);
    
    this.songs = newData;
    
    
    
    renderSongs(this.songs);
  }
}
