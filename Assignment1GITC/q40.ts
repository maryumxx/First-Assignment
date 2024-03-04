function makeAlbum(artist: {artistName: string, albumTitle: string, numberOfTracks?: number}): void {
    console.log('Name: '+ artist.artistName + ', Album Name: '+ artist.albumTitle+ 'numberoftrack: '+artist.numberOfTracks);
}




let dictionery = {
    artistName: 'Rihanna',
    albumTitle: 'Pop',
    numberOfTracks: 11

};

let dictionery2 = {
    artistName: 'Atif Aslam',
    albumTitle: 'Pop'

};

let dictionery3 = {
    artistName: 'Chahat Fateh Ali Khan',
    albumTitle: 'Classical'

}

makeAlbum(dictionery);
makeAlbum(dictionery2);
makeAlbum(dictionery3);

