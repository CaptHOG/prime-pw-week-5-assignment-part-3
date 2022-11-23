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

console.log('Music collection:', collection);