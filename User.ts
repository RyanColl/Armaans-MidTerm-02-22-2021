import { Playlist } from "./Playlist"
import { Album } from "./Album"
import { Song } from "./Song"


export class User {
    username: string;
    private password: string;
    playLists: Playlist[] = [];
    albums: Album[] = [];
    extractorArray: Song[] = [];
    playListArray: string[] = [];
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
    addPlaylist(playlist: Playlist) {
        this.playLists.push(playlist);
    }
    addAlbum(album: Album) {
        this.albums.push(album)
    }
     
    getAlbums() {
        return this.albums;
    }
    getPlaylists() {
        this.playLists.forEach(playlist => {
            playlist.songList.forEach(song => {
                this.playListArray.push(song.title)
            })
        })
        return this.playListArray;
    }
    getSongs(): Song[] {
        this.albums.forEach(album => {
            album.tracklist.forEach(song => {
                this.extractorArray.push(song)
            })
        })
        return this.extractorArray;
    }
}