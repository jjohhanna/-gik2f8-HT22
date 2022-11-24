const BookListItem = (book) => {
    let html =  `<li
                    class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b borxer-indigo-700 cursor-pointer">
                        ${book.author} – ${book.title}
                    </li>`;
                    // ${} varielber desinera efter $ och inom {} 
                    // varialber används för att visa upp listelement 
    return html;
};