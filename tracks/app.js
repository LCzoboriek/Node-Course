const fs = require('fs');
const yargs = require('yargs');
const _ = require('lodash');
const tracks = require('./tracks');
const argv = yargs
        .options({
            c: {
                demand: true,
                alias: 'command',
                describe: 'enter list, add, get or remove',
                string: true
            },
            t: {
                alias: 'title',
                string: true
            },
            a: {
                alias: 'artist',
                string: true
            },
            al:
            {
                alias: 'album',
                string: true
            }
// So this way you can make options a little more simpler, and even remove the need for the equals sign on the get command, adding descriptions will also help your users
        })
.help()
.alias('help','h')
.argv;
//console.log(argv);
//var command = process.argv[2];
var command = argv.command;

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