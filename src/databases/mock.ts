import quotes from "./quotes.js";

function getRandomQuote(): { [key: string]: string } {
  const authors = Object.keys(quotes);
  const random = authors[Math.floor(Math.random() * authors.length)];
  const quoteArr = quotes[random];
  const quote = quoteArr[Math.floor(Math.random() * quoteArr.length)];
  const response = {
    [random]: quote,
  };
  return response;
}

function getAllQuotes(): { [key: string]: string[] } {
  return quotes;
}

function getAuthors(): string[] {
  const authors = Object.keys(quotes);
  return authors;
}

export { getRandomQuote, getAllQuotes, getAuthors };
