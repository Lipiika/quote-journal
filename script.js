const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
  { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
  { text: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
];

function getRandomQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];
  document.getElementById("quote-text").textContent = quote.text;
  document.getElementById("quote-author").textContent = quote.author;
}

function saveToFavorites() {
  const text = document.getElementById("quote-text").textContent;
  const author = document.getElementById("quote-author").textContent;

  const newQuote = { text, author };
  let favorites = JSON.parse(localStorage.getItem("favoriteQuotes")) || [];

  const exists = favorites.some(q => q.text === newQuote.text && q.author === newQuote.author);

  if (!exists) {
    favorites.push(newQuote);
    localStorage.setItem("favoriteQuotes", JSON.stringify(favorites));
    alert("Quote saved to favorites!");
  } else {
    alert("This quote is already in your favorites.");
  }
}

window.onload = getRandomQuote;
