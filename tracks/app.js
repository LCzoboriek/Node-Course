const fs = require('fs');
const tracks = require('./tracks.js');

const yargs = require('yargs');
const argv = yargs.argv;
const _ = require('lodash');
var command = argv._[0];

if(command == 'add'){
    tracks.addTrack(argv.artist, argv.title, argv.album);
} else if(command == 'list'){
    tracks.listTrack();
} else if(command == 'get'){
    tracks.retrieveTrack;
} else if(command == 'remove'){
    tracks.removeTrack;
} else {
    console.log('Please ensure you used one of the following commands, add, get, list, remove.');
}

