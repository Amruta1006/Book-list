let bookList = [
    { title: "Think Like a Monk" },
    { title: "I am Malala" },
    { title: "Jonathan Livingston Seagull" }
];

window.onload = function() {
    loadBooks();
};

function loadBooks() {
    const bookListContainer = document.getElementById("book-list");
    bookListContainer.innerHTML = "";

    for (let i = 0; i < bookList.length; i++) {
        const book = bookList[i];
        bookListContainer.innerHTML += `
            <li class='book-item'>
                <div>
                    <strong>Title:</strong> ${book.title} <br>
                </div>
                <button onclick="removeBook(${i})">Remove</button>
            </li>`;
    }
}

function addBook() {
    const titleInput = document.getElementById("book-title").value.trim();

    bookList.push({title: titleInput});
    document.getElementById("book-title").value = "";
    loadBooks();
}

function removeBook(index) {
    bookList.splice(index, 1);
    loadBooks();
}