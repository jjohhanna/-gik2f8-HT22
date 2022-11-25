const url = 'https://gik2f8-labs.herokuapp.com/books';

// alt 3 – KAN KONINERA AWAIT OCH THEN
async function getAll() {             //getAll är en asynkron funktion
    // returnerar ett promsie:
    const result = await fetch(url).then((result) => result.json); // await väntar på att det blir klart
    return result;
}


// alt 2 – ANVÄNDA AWAIT

/* async function getAll() {             //getAll är en asynkron funktion
    // returnerar ett promsie:
    const result = await fetch(url);
    const jsonData = await result.json(); // await väntar på att det blir klart
    return jsonData;
} */


// alt 1 – ANVÄNDA THEN
/* function getAll() {             //getAll är en asynkron funktion
    // returnerar ett promsie:
    return fetch(url) 
        .then((result) => result.json())
        .then((jsonData) => jsonData); 
} */

