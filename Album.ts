import { Artist } from "./Artists"
import { Song } from "./Song"



export class Album {
    title: string;
    artist: Artist;
    releaseYear: number;
    tracklist: Song[] = [];
    constructor(title: string, artist: Artist, releaseYear: number) {
        this.title = title;
        this.artist = artist;
        this.releaseYear = releaseYear;
    }
    addSong(song: Song) {
        this.tracklist.push(song)
    }
}