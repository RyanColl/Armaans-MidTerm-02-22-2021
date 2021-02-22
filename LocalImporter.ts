import { Album } from './Album';
import { Importer } from './PlaylistImporter';
import { Artist } from './Artists';
import {Playlist} from './Playlist';
import { Song } from './Song';


export class LocalImporter implements Importer {
    filePath: string;
    constructor(filePath: string) {
        this.filePath = filePath;
    }
    loadPlaylist(): Playlist {
        console.log(`Your playlist at location ${this.filePath} will be loaded`)
        let artist = new Artist("Infected Mushroom")
        let album = new Album("Supervisor", artist, 2009);
        album.addSong(new Song("The Menacing"))
        let playList = new Playlist("Fected")
        playList.addAlbum(album)
        return playList;
    }
}