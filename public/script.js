const artistBox = document.getElementById('artist');
const songBox = document.getElementById('song')
const searchBtn = document.getElementById('search');
const resultsContainer = document.getElementById("results-container")
var lyricsContainer = document.getElementById("lyrics-container");


const proxy = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://api.lyrics.ovh/v1/';



//event listeners

searchBtn.addEventListener('click',() =>{
    var artist = artistBox.value.trim();
    var song =  songBox.value.trim();
    getLyrics(artist,song);
})


async function getLyrics(artist,title){
    const res = await fetch (`${proxy}${url}${artist}/${title}`,{
        headers:{
            origin:'https://lyricism.herokuapp.com/'
        }
    });
    const data = await res.json();

    showLyrics(data);
}

function showLyrics(data){
    

    if(data.lyrics == undefined){
        lyricsContainer.innerText = `${data.error}, make sure you entered the song details correctly...`;
        resultsContainer.className = "results-container show";
    }
    else{
        lyricsContainer.innerText = data.lyrics;
        resultsContainer.className = "results-container show";
    }


    
}



