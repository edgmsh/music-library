const library = {
  tracks: { t01: {
    id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: {
    id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  for (const key in library.playlists) {
    console.log(`${library["playlists"][key]["id"]}: ${library["playlists"][key]["name"]} - ${library["playlists"][key]["tracks"].length} tracks`);
  }
};
printPlaylists();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  for (const key in library.tracks) {
    console.log(`${library["tracks"][key]["id"]}: ${library["tracks"][key]["name"]} by ${library["tracks"][key]["artist"]} (${library["tracks"][key]["album"]})`);
  }
};
printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  console.log(`${library["playlists"][playlistId]["id"]}: ${library["playlists"][playlistId]["name"]} - ${library["playlists"][playlistId]["tracks"].length} tracks`);

  let tracks = library["playlists"][playlistId]["tracks"];
  for (let track of tracks) {
    console.log(`${library["tracks"][track]["id"]}: ${library["tracks"][track]["name"]} by ${library["tracks"][track]["artist"]} (${library["tracks"][track]["album"]})`);
  }

};
printPlaylist("p01");


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  if (Object.prototype.hasOwnProperty.call(library["tracks"], trackId) && Object.prototype.hasOwnProperty.call(library["playlists"], playlistId)) {
    library["playlists"][playlistId]["tracks"].push(trackId);
  }
};
addTrackToPlaylist("t02","p02");


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};
console.log(generateUid());


// adds a track to the library
const addTrack = function(name, artist, album) {
  let track = generateUid();
  library["tracks"][track] = {
    "id"   : track,
    "name"   : name,
    "artist" : artist,
    "album"  : album
  };
};
addTrack("EdGar","Mike", "1sr album");

// adds a playlist to the library
const addPlaylist = function(name) {
  let pList = generateUid();
  library["playlists"][pList] = {
    "id" : pList,
    "name" : name,
    "tracks" : {}
  };
};
addPlaylist("My music");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {
  let name;
  let artist;
  let album;
  let lQuery = query.toLowerCase();
  for (const key in library["tracks"]) {
    name = library["tracks"][key]["name"].toLowerCase();
    artist = library["tracks"][key]["artist"].toLowerCase();
    album = library["tracks"][key]["album"].toLowerCase();
    if (name.search(lQuery) !== -1 || artist.search(lQuery) !== -1 || album.search(lQuery) !== -1) {
      console.log(`${library["tracks"][key]["id"]}: ${library["tracks"][key]["name"]} by ${library["tracks"][key]["artist"]} (${library["tracks"][key]["album"]})`);
    }
  }
};
printSearchResults("Code");