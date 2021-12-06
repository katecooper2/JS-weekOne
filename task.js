"use strict"

const playlist = document.querySelector("input#playlist");

document.querySelector("button#listSongs").addEventListener("click", getSongs);
   
document.querySelector("craete").addEventListener("submit", function(event){
    event.preventDefault();
    const data = {
        songName: form.songName.value,
        artistName: form.artistName.value,
    }

    console.log("DATA: ", data);
    
    const getSongs = () => {
        axios
            .get("http://localhost:8081/Song/getAll")
            .then(res => {
                console.log(res);
                const songs = res.data;
                getOutput.innerHTML = ""; // blanks the output field
                for (let song of songs) {
                    const SongContainer = document.createElement("div");
                        
                    const songName = document.createElement("p");
                    songName.innerText = `song: ${song.name}`;
                    SongContainer.appendChild(songName);
    
                    const artistName = document.createElement("p");
                    artistName.innerText = `artist: ${artist.name}`;
                    duckContainer.appendChild(duckAge);
    
                    getOutput.appendChild(SongContainer);
                }
            })
            .catch(err => console.error(err));
    }
 })
  


