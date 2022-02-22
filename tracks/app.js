const fs = require('fs');
const yargs = require('yargs');
const _ = require('lodash');
const tracks = require('./tracks');
const argv = yargs.argv;
//console.log(argv);
//var command = process.argv[2];
var command = argv._[0];

if (command === 'add') {
    tracks.addTrack(argv.artist, argv.title, argv.album);
} else if (command === 'list') {
    var allTracks = tracks.listTracks();
    console.log('Displaying all tracks');
    allTracks.forEach((track) => {
        console.log(`${track.title} by ${track.artist} from ${track.album}`);
    } )
} else if (command === 'get') {
    var track = tracks.getTrack(argv.title);
    if (track) {
        console.log(`Title: ${track.title}`);
        console.log(`Artist: ${track.artist}`);
        console.log(`Album: ${track.album}`);      
    } else {
        console.log('Track not found');
    }
} else if (command === 'remove') {
    tracks.removeTrack(argv.title);
    console.log(`Removed track ${argv.title}`);
} else {
    console.log('Command not found');
}