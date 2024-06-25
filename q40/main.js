"use strict";
// Define the make-album function
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions and creating 3 Variables with different values
let album1 = make_album("Amna", "Album title 1");
let album2 = make_album("Ahad", "Album title 2");
// Calling a make_album function with third parameter 
let album3 = make_album("Ali", "Album title 3", 10);
// printing the variables
console.log(album1);
console.log(album2);
console.log(album3);
