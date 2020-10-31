const formElem = document.querySelector(".form");
const usrTitle = document.querySelector("#usrTitle");
const usrContent = document.querySelector("#usrContent");
const clearBtn = document.querySelector("#clear");
const arrObj = [];

// Article class initialized
class Article {
  constructor(title = "", content = "") {
    this.title = title;
    this.content = content;
  }
  outputArt() {
    //   Create an Article element
    const newArt = document.createElement("Article");

    // Create a title element and add value
    const artTtl = document.createElement("h3");
    artTtl.textContent = this.title;

    // Create a paragraph element and add value
    const artCntn = document.createElement("p");
    artCntn.textContent = this.content;

    //Append title and paragraph to Article
    newArt.appendChild(artTtl);
    newArt.appendChild(artCntn);

    //Append Article to the DOM
    document.body.appendChild(newArt);

    // console.log(`${this.title} ${this.content}`);
  }
}

formElem.addEventListener("submit", (submitEvent) => {
  submitEvent.preventDefault();

  //Initialize Value
  const title = usrTitle.value;
  const content = usrContent.value;

  //Create an title element and add text content
  //   let artTitle = document.createElement("h3");
  //   artTitle.textContent = title;

  //   //Create an paragraph element and add text content
  //   let artContent = document.createElement("p");
  //   artContent.textContent = content;

  //   //Create a new article Element and append content
  //   let newArt = document.createElement("article");
  //   newArt.appendChild(artTitle);
  //   newArt.appendChild(artContent);

  //   //Append to DOM
  //   document.body.appendChild(newArt);

  //Clear
  formElem.reset();

  //   Call constructor
  const art = new Article(title, content);
  art.outputArt();
});
