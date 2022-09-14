import quotes from "./quotes.js";

type ResponseObj = {
  author: string;
  quotes?: string[];
  quote?: string;
};

function getRandomQuote(): ResponseObj {
  const authors = Object.keys(quotes);
  const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
  const quoteArr = quotes[randomAuthor];
  const randomQuote = quoteArr[Math.floor(Math.random() * quoteArr.length)];
  return {
    author: randomAuthor,
    quote: randomQuote,
  };
}

function getAllQuotes(): { [key: string]: string[] } {
  return quotes;
}

type ResponseArr = Array<string>;
type Response = ResponseObj | ResponseArr;

function getAuthors(author?: string): Response {
  if (author === undefined) return Object.keys(quotes).sort();

  const foundAuthor = Object.keys(quotes).find(
    (key) => key.toLowerCase() === author.toLowerCase()
  );
  if (foundAuthor)
    return {
      author: foundAuthor,
      quotes: quotes[foundAuthor],
    };

  const foundAuthors = Object.keys(quotes)
    .filter((key) => key.toLowerCase().includes(author.toLowerCase()))
    .sort();

  return foundAuthors;
}

export { getRandomQuote, getAllQuotes, getAuthors };
