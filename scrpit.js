'use strict';

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

searchField.addEventListener("keyup", (e) =>  renderBookList(
    bookList.filter(({title , author}) => {
        const searchTerm = e.target.value.toLowerCase();
        return title.toLowerCase().indexOf(searchTerm) >= 0 || author.toLowerCase().indexOf(searchTerm) >= 0;
        })
    )
); 

// varjge gång vi skriver in något ny bokstav i inputfält, körs denna lopp igen:
function renderBookList(bookList) { // OBS booklist är inte samma som booklist på rad 4! Denna booklist existerar endast innaför denna funktion.
    /* element i HTML-listan visas/dölj bereonde på listans innehåll. Funktionen är till för att manipulera HTML så att ul blir fyllt med li element som motsvarar innehållet i listan*/

    
    //lägger till element och tar bort existerande element genom en loop:
        // Gäller varjge gång man skriver in i input fällt
        const existingElement = document.querySelector(".book-list"); //det här elementet finns först när man skrivt in det fösta tecknet
        console.log(existingElement); //skriver ut elementet ovan

        const root = document.getElementById('root');   
        if(existingElement){
        root.removeChild(existingElement); // kan man i andra sammanhang använda replaceChild
    }
    if(bookList.length > 0) {
        root.insertAdjacentHTML("beforeend", BookList(bookList)); //skapa html text. Kan använda olika kombinationer av before.begin, beforeafter, beforeend osv
        //root.appendChild(htmlElement); //skapa html text OBS appen child visar ej listan, går bort
     //const htmlElement = document.createElement('ul'); //skapa html element 
    }
}
