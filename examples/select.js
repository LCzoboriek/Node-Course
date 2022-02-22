const pg = require('pg');
const pgUser = 'user1';
const pgPassword = 'user1';
const pgDatabase = 'postgres';

var cs = `postgres://${pgUser}:${pgPassword}@localhost:5432/${pgDatabase}`;
const client = new pg.Client(cs);
// Passing it a new client with the connect string and connecting to the database

client.connect();
// const sql = 'INSERT INTO tracks (title, artist, album) VALUES($1, $2, $3)';
// const values = ['Smooth Criminal', 'Michael Jackson', 'Bad'];
const sql = 'SELECT * FROM tracks WHERE title = $1'
const values = ['Smooth Criminal']

client.query(sql, values)
    .then((res)=> {const data = res.rows
    data.forEach((row) => {
        console.log(`${row.title} by ${row.artist} from ${row.album}`);
    })})

    // If you wanted all the tracks you would remove the values and just have SQL, and youd just have select * from Tracks
    .finally(() => client.end());
