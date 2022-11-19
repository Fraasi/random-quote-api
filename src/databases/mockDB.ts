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

interface PerAuthor {
  [key: string]: number;
}

interface Stats {
  authors: number;
  quotes: number;
  quotesPerAuthor: PerAuthor;
}

function getStats(): Stats {
  const authorsArray = Object.keys(quotes);
  let totalQuotes = 0;

  const quotesCounted: PerAuthor = authorsArray.reduce((prev, curr) => {
    const quotesNum = quotes[curr].length;
    totalQuotes += quotesNum;
    prev[curr] = quotesNum;
    return prev;
  }, {});

  const quotesCountedSorted: Array<[string, number]> = Object.entries(
    quotesCounted
  ).sort(([, v1], [, v2]) => v2 - v1);
  const quotesPerAuthor = Object.fromEntries(quotesCountedSorted);

  return {
    authors: authorsArray.length,
    quotes: totalQuotes,
    quotesPerAuthor,
  };
}

type SearchResults = {
  [key: string]: string[];
};

function searchQuotes(searchTerm: string): SearchResults {
  const searchResults = {};

  for (const [author, a_quotes] of Object.entries(quotes)) {
    for (const quote of a_quotes) {
      if (quote.includes(searchTerm)) {
        if (!(author in searchResults)) searchResults[author] = [];
        searchResults[author].push(quote);
      }
    }
  }
  return searchResults;
}

export { getRandomQuote, getAllQuotes, getAuthors, getStats, searchQuotes };
