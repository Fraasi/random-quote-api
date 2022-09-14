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

type Author = { [keys: string]: string[] };
type Authors = Array<string>;
type Auths = Author | Authors;

function getAuthors(authors?: string): Auths {
  if (!authors) return Object.keys(quotes).sort();

  if (authors && quotes[authors] !== undefined)
    return {
      [authors]: quotes[authors],
    };

  return Object.keys(quotes)
    .filter((key) => key.toLowerCase().includes(authors.toLowerCase()))
    .sort();
}

export { getRandomQuote, getAllQuotes, getAuthors };
