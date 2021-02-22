import { Song } from "./Song"
import { Album } from "./Album"



export class Playlist {
    name: string;
    songList: Song[] = [];
    constructor(name: string) {
        this.name = name;
    }
    addAlbum(album: Album) {
        if (album.tracklist[0]) {
            album.tracklist.forEach(song => {
            this.songList.push(song);
            }) 
        } else {
            console.log("Error, album tracklist empty")
            return;
        }
        
    }
}