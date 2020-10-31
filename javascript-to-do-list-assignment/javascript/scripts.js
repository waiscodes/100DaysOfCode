// Initializing To Be Read Variables
const newBook = document.querySelector("form"),
  bookField = document.querySelector("#books"),
  bookList = document.querySelector("#bookList"),
  readingList = document.querySelector("#readingList"),
  finishedList = document.querySelector(".finishedList"),
  bookArray = [];

// Adding Event Listeners
newBook.addEventListener("submit", (submitEvent) => {
  //Prevent reloading on submit
  submitEvent.preventDefault();

  //Initializing value
  const book = bookField.value;

  //Create new list and add value
  newLi = document.createElement("LI");

  //Create a P element to add value to
  let bookTitle = document.createElement("p");
  bookTitle.textContent = book;

  //Initialize and create finished buttons
  let finishedBtn = document.createElement("button");
  finishedBtn.textContent = "finished";
  finishedBtn.addEventListener("click", (clickEvent) => {
    const finishedBook = clickEvent.target.parentElement;
    finishedList.appendChild(finishedBook);
  });
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", (clickEvent) => {
    clickEvent.target.parentElement.remove();
  });

  let readBtn = document.createElement("button");
  readBtn.textContent = "Read";
  readBtn.addEventListener("click", (clickEvent) => {
    const toRead = clickEvent.target.parentElement;
    readingList.appendChild(toRead);
  });

  //Append buttons to new LI
  newLi.appendChild(bookTitle);
  newLi.appendChild(finishedBtn);
  newLi.appendChild(deleteBtn);
  newLi.appendChild(readBtn);

  //Append Li to UL/the DOM
  bookList.appendChild(newLi);

  //Clear input form
  newBook.reset();
});

/* 


  form reset method: https://stackoverflow.com/questions/15343890/clear-input-fields-on-form-submit/15344107

  button creation: Help from Aaron in the forrest. 


*/
