function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}


Book.prototype.getBookInfo = function() {
    console.log(this.title, this.author.name, this.genre, this.price);
}


let author1 = new Author("Chetan Bhagat", 1975, "Indian")
let book1 = new Book("2 States", author1, "Fiction-Romance", 220);

book1.getBookInfo();