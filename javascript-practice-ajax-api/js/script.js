// alert("boo");
//
//
const quoteEL = document.querySelector(".quote"),
  byEL = document.querySelector(".by");

const bbQuotes = () => {
  fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const quote = data[0].quote;
      const by = data[0].author;

      quoteEL.textContent = quote;
      byEL.textContent = `— ${by}`;
    });
};
bbQuotes();

setInterval(bbQuotes, 20000);
