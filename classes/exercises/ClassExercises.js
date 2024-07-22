// Define your Book class here:
class Book {
    constructor (title, author, copyrightDate, ISBN, numPages, numTimesCheckedOut, toBeDiscarded){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.numPages = numPages;
        this.numTimesCheckedOut = numTimesCheckedOut;
        this.toBeDiscarded = toBeDiscarded;
    }
    checkOut(num = 1){
        this.numTimesCheckedOut += num;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor (title, author, copyrightDate, ISBN, numPages, numTimesCheckedOut, toBeDiscarded) {
        super(title, author, copyrightDate, ISBN, numPages, numTimesCheckedOut, toBeDiscarded);
    }
    needToDiscardCheck () {
    if (2024 - this.copyrightDate > 5){
        this.toBeDiscarded = true;
    }
    };
}

class Novel extends Book {
    constructor (title, author, copyrightDate, ISBN, numPages, numTimesCheckedOut, toBeDiscarded) {
        super(title, author, copyrightDate, ISBN, numPages, numTimesCheckedOut, toBeDiscarded);
    }
    needToDiscardCheck () {
    if (this.numTimesCheckedOut > 100){
        this.toBeDiscarded = true;
    }
    }
}

// Declare the objects for exercises 2 and 3 here:
let book1 = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111", 432, 32, false);
let book2 = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000", 1147, 1, false);

// Code exercises 4 & 5 here:
book2.needToDiscardCheck();
console.log(book2.toBeDiscarded);
book1.checkOut(5);
console.log(book1.numTimesCheckedOut);