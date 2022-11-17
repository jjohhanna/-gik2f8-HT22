'use strict';
/* Vad ska vi göra här?*/
console.log('test');


const bookList = [
    {
        id: 1,
        author: 'Charles Dickens',
        title: 'Oliver Twist'
    },
    {
        id: 2,
        author: 'William Shakespear',
        title: 'Hamlet'
    }
];
//const searchField = document.children[0].children[1].children[1].children[1]; //[0] är första plasten i listan, [1] är andra osv 
const searchField = document.getElementById('searchField');
console.log(searchField) // skirver ut (html element)

//keydown & keyup
//searchField.addEventListener("keydown", (e) => console.log(e.target.value));
//searchField.addEventListener("keyup", (e) => console.log(e.key));
//searchField.addEventListener("keyup", (e) => console.log(e.target.value));
searchField.addEventListener("keyup", handleKeyPress);


/*Vi utvecklar function handelKeyPress*/
function handleKeyPress (e) {
    /* Ta emot/läsa av värdet i input fältet.
        Sen ska den sickade värdet till en annan funktion "searchBooks"
        Sen returnerar "Searchbooks" en filtrerad lista
        Den filtrerade listan sickas till "renderBookList", en funktion som ritar ut själva listan 
        */
    searchBooks(e.target.value);
}


function searchBooks(searchTerm) {
    /* Vi behöver tillgång till booklistan
        Vi ska loopa igenom listan 
        För varje varv i loopen, ska den kolla på akutella element (boken) i listan
        Ska kunna jämföra titeln med söktermen
        Om söktermen finns någonstanns i titeln, lägg till elementet i en ny lista (filteredList)
        Returnerar filterlist eller anropar renderBookList direkt?
    */
    const filteredList = []; /* Variabel som anger Aray, hade vi gjort ne sträck som vi hade velat kunna förändra hade vi inte kunnat ha cont, utan behövt använda let*/
    for(let i = 0; i < bookList.length; i++) {/* for-loop */
        const title = bookList[i].title.toLowerCase() /* variabel som vi även har gjort till små bokstäver (Lower Case) */
        if(title.indexOf(searchTerm.toLowerCase()) >= 0){
            filteredList.push(bookList[i]); /* Vi vill ha hela elementet/objektet och inte bara titeln */
        } 
    }
    renderBookList(filteredList);
}


function renderBookList(list) {
    /* element i HTML-listan visas/dölj bereonde på listans innehåll. Funktionen är till för att manipulera HTML så att ul blir fyllt med li element som motsvarar innehållet i listan*/
    
    console.log(list)
}


