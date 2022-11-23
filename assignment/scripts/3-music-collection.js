console.log('***** Music Collection *****')

// establish music collection
let collection = [];

// adds albums to music collection
function addToCollection(title, artist, yearPublished) {
    let album = {title, artist, yearPublished};
    collection.push(album);
    return album;
}