import {Playlist} from './Playlist';

export interface Importer {
    loadPlaylist(): Playlist;
}

export class PlaylistImporter {
    playList: Importer;
    constructor(importPlaylist: Importer) {
        this.playList = importPlaylist;
    }
    importPlaylist(): Playlist {
        let playlist = this.playList.loadPlaylist();
        return playlist;
    }
} 