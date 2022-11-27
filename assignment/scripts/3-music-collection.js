console.log('***** Music Collection *****')


// ran out of time for the final stretch goal


// establish music collection
let collection = [];


// establish tracks arrays for albums
const tracksMetKill = [
    {trackName: 'Hit The Lights', duration: '4:15'},
    {trackName: 'The Four Horsemen', duration: '7:12'},
    {trackName: 'Motorbreath', duration: '3:07'}
];

const tracksBoston = [
    {trackName: 'More Than a Feeling', duration: '4:45'},
    {trackName: 'Peace of Mind', duration: '5:03'},
    {trackName: 'Foreplay / Long Time', duration: '7:47'}
];

const tracksZac = [
    {trackName: 'Toes', duration: '4:22'},
    {trackName: 'Whatever It Is', duration: '3:28'},
    {trackName: 'Where the Boat Leaves From', duration: '3:42'}
];

const tracksMiley = [
    {trackName: 'WTF Do I Know', duration: '2:51'},
    {trackName: 'Plastic Hearts', duration: '3:25'},
    {trackName: 'Angels Like You', duration: '3:16'}
];

const tracksAfi = [
    {trackName: 'Strength Through Wounding', duration: '1:33'},
    {trackName: 'Porphyria', duration: '2:07'},
    {trackName: 'Exsanguination', duration: '2:48'}
];

const tracksMetDeath = [
    {trackName: 'That Was Just Your Life', duration: '7:08'},
    {trackName: 'The End Of The Line', duration: '7:52'},
    {trackName: 'Broken, Beat & Scarred', duration: '6:25'}
];


// adds albums to music collection
function addToCollection(title, artist, yearPublished, tracks) {
    let album = {title, artist, yearPublished, tracks};
    collection.push(album);
    return album;
}


// adding albums
console.log('Album added:', addToCollection('Kill \'Em All', 'Metallica', 1983, tracksMetKill));
console.log('Album added:', addToCollection('Boston', 'Boston', 1976, tracksBoston));
console.log('Album added:', addToCollection('The Foundation', 'Zac Brown Band', 2008, tracksZac));
console.log('Album added:', addToCollection('Plastic Hearts', 'Miley Cyrus', 2020, tracksMiley));
console.log('Album added:', addToCollection('Black Sails In The Sunset', 'AFI', 1999, tracksAfi));
console.log('Album added:', addToCollection('Death Magnetic', 'Metallica', 2008, tracksMetDeath));


// shows music collection
console.log('Music collection:', collection);


// shows collection of albums
function showCollection(array) {
    console.log('Number of albums in collection:', array.length);
    array.forEach(album => {
        for (const title of array) {
            console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished} 
            ${album.tracks}`); // not working
        }
    });
}
// testing showCollection
showCollection(collection);


// searches for artist in collection
function findByArtist(artist) {
    const results = collection.filter(album => album.artist === artist);
    return results;
}
console.log('Searching collection for Metallica:', findByArtist('Metallica'));
console.log('Searching collection for Boston:', findByArtist('Boston'));
console.log('Searching collection for Dr. Dre:', findByArtist('Dr. Dre'));


// searches collection by artist or year
function search(searchParam) {
    if (searchParam === undefined || searchParam === '' || searchParam === null) {
        return collection;
    } else {
        const results = collection.filter(album => 
            album.artist === searchParam 
            || album.yearPublished === searchParam 
            || album.tracks.trackName === searchParam); // not working
            return results;
    }
}
// testing searches
console.log('Search test - Metallica:', search('Metallica'));
console.log('Search test - 2008:', search(2008));
console.log('Search test - 1999:', search(1999));
console.log('Search test - Boston:', search('Boston'));
console.log('Search test - Dr. Dre, should be empty array:', search('Dr. Dre'));
console.log('Search test - 2020:', search(2020));
console.log('Search test - empty, should be collection:', search(''));
console.log('Search test - undefined, should be collection:', search());
console.log('Search test - null, should be collection:', search(null));

// testing trackName searches (not working)
console.log('Test - (not working)', search('Hit The Lights'));
console.log('Test - (not working)', search('Motorbreath'));