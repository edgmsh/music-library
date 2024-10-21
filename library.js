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
  },

  /////////////////////////////
  // FUNCTIONS TO IMPLEMENT:
  /////////////////////////////

  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function() {
    for (const key in library.playlists) {
      console.log(`${this.playlists[key]["id"]}: ${this.playlists[key]["name"]} - ${this.playlists[key]["tracks"].length} tracks`);
    }
  },

  // prints a list of all tracks, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function() {
    for (const key in library.tracks) {
      console.log(`${this.tracks[key]["id"]}: ${this.tracks[key]["name"]} by ${this.tracks[key]["artist"]} (${this.tracks[key]["album"]})`);
    }
  },

  // prints a list of tracks for a given playlist, using the following format:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function(playlistId) {
    console.log(`${this.playlists[playlistId]["id"]}: ${this.playlists[playlistId]["name"]} - ${this.playlists[playlistId]["tracks"].length} tracks`);

    let tracks = this.playlists[playlistId]["tracks"];
    for (let track of tracks) {
      console.log(`${this.tracks[track]["id"]}: ${this.tracks[track]["name"]} by ${this.tracks[track]["artist"]} (${this.tracks[track]["album"]})`);
    }
  },

  // adds an existing track to an existing playlist
  addTrackToPlaylist: function(trackId, playlistId) {
    if (Object.prototype.hasOwnProperty.call(this.tracks, trackId) && Object.prototype.hasOwnProperty.call(this.playlists, playlistId)) {
      this.playlists[playlistId]["tracks"].push(trackId);
    }
  },

  // generates a unique id
  // (already implemented: use this for addTrack and addPlaylist)
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  // adds a track to the library
  addTrack: function(name, artist, album) {
    let track = this.generateUid();
    this.tracks[track] = {
      "id"   : track,
      "name"   : name,
      "artist" : artist,
      "album"  : album
    };
  },

  // adds a playlist to the library
  addPlaylist: function(name) {
    let pList = this.generateUid();
    this.playlists[pList] = {
      "id" : pList,
      "name" : name,
      "tracks" : {}
    };
  },

  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri")
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  printSearchResults: function(query) {
    let name;
    let artist;
    let album;
    let lQuery = query.toLowerCase();
    for (const key in this.tracks) {
      name = this.tracks[key]["name"].toLowerCase();
      artist = this.tracks[key]["artist"].toLowerCase();
      album = this.tracks[key]["album"].toLowerCase();
      if (name.search(lQuery) !== -1 || artist.search(lQuery) !== -1 || album.search(lQuery) !== -1) {
        console.log(`${this.tracks[key]["id"]}: ${this.tracks[key]["name"]} by ${this.tracks[key]["artist"]} (${this.tracks[key]["album"]})`);
      }
    }
  }
  
};

library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.addTrackToPlaylist("t02","p02");
library.addTrack("EdGar","Mike", "1sr album");
library.addPlaylist("My music");
library.printSearchResults("code");