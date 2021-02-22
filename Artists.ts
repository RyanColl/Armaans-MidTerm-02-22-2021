import { Song } from "./Song"
import { Album } from "./Album"

export class Artist {
    private songList: Song[] = [];
    private albumList: Album[] = [];
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    addAlbum(album: Album) {
        this.albumList.push(album)
    }
    addSong(song: Song) {
        this.songList.push(song)
    }
}