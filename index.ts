import { Song } from "./Song"
import { Album } from "./Album"
import { Artist } from "./Artists"
import { User } from "./User"
import { Playlist } from "./Playlist"
import { LocalImporter } from "./LocalImporter"
import { CloudImporter } from "./CloudImporter"
import { PlaylistImporter } from "./PlaylistImporter"

let artist = new Artist("Muse")
let album = new Album("The 2nd Law", artist, 2012)
let song = new Song("Madness")
album.addSong(song)

let playlist = new Playlist("Fun Songs")
playlist.addAlbum(album)

let localPlaylistImporter = new PlaylistImporter(
    new LocalImporter("myPLaylist.txt")
)

let cloudPlaylistImporter = new PlaylistImporter(
    new CloudImporter("www.youtube.com")
)

let localPlaylist = localPlaylistImporter.importPlaylist()
let cloudPlaylist = cloudPlaylistImporter.importPlaylist()

let user = new User("ryan123", "password123")

user.addPlaylist(localPlaylist)
user.addPlaylist(cloudPlaylist)

console.log("Getting Playlist...")
console.log(user.getPlaylists())


console.log("Getting Albums...")
console.log(user.getAlbums())

console.log("Getting Songs...")
console.log(user.getSongs())
