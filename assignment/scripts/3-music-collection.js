console.log('***** Music Collection *****')


// establish music collection
let collection = [];


// adds albums to music collection
function addToCollection(title, artist, yearPublished) {
    let album = {title, artist, yearPublished};
    collection.push(album);
    return album;
}


// adding albums
console.log('Album added:', addToCollection('Kill \'Em All', 'Metallica', 1983));
console.log('Album added:', addToCollection('Boston', 'Boston', 1976));
console.log('Album added:', addToCollection('The Foundation', 'Zac Brown Band', 2008));
console.log('Album added:', addToCollection('Plastic Hearts', 'Miley Cyrus', 2020));
console.log('Album added:', addToCollection('Black Sails In The Sunset', 'AFI', 1999));
console.log('Album added:', addToCollection('Death Magnetic', 'Metallica', 2008));


// shows music collection
console.log('Music collection:', collection);


// shows collection of albums
function showCollection(array) {
    console.log('Number of albums in collection:', array.length);
    array.forEach(album => {
        for (const title in array) {
            console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
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
            album.artist === searchParam || album.yearPublished === searchParam);
            return results;
    }
}
console.log('Test - Metallica:', search('Metallica'));
console.log('Test - 2008:', search(2008));
console.log('Test - 1999:', search(1999));
console.log('Test - Boston:', search('Boston'));
console.log('Test - Dr. Dre, should be empty array:', search('Dr. Dre'));
console.log('Test - 2020:', search(2020));
console.log('Test - empty, should be collection:', search(''));
console.log('Test - undefined, should be collection:', search());
console.log('Test - null, should be collection:', search(null));