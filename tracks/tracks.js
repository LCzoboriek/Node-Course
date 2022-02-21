var addTrack = (artist, title, album) => {
    console.log('Adding a track', artist, title, album)
}

var listTrack = (title) => {
    console.log('Listing all tracks', title);
}

var retrieveTrack = (title) => {
    console.log('Heres the track titled: ', title);
}

var removeTrack = (title) => {
    console.log('Removing the following track: ', title);
}

module.exports = {
    addTrack, 
    removeTrack,
    listTrack,
    retrieveTrack,
}