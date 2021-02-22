import { Album } from './Album';
import { Importer } from './PlaylistImporter';
import { Artist } from './Artists';
import {Playlist} from './Playlist';
import { Song } from './Song';


export class CloudImporter implements Importer {
    filePath: string;
    constructor(filePath: string) {
        this.filePath = filePath;
    }
    loadPlaylist(): Playlist {
        console.log(`Your playlist on the web at ${this.filePath} will be loaded`)
        let artist = new Artist("Saavy Grapes")
        let album = new Album("Transportation", artist, 2008);
        album.addSong(new Song("The Menacing"))
        let playList = new Playlist("Natural")
        playList.addAlbum(album)
        return playList;
    }
        
}