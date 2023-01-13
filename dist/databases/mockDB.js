"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRandomQuote: ()=>getRandomQuote,
    getAllQuotes: ()=>getAllQuotes,
    getAuthors: ()=>getAuthors,
    getStats: ()=>getStats,
    searchQuotes: ()=>searchQuotes
});
const _quotesJs = _interopRequireDefault(require("./quotes.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function getRandomQuote() {
    const authors = Object.keys(_quotesJs.default);
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
    const quoteArr = _quotesJs.default[randomAuthor];
    const randomQuote = quoteArr[Math.floor(Math.random() * quoteArr.length)];
    return {
        author: randomAuthor,
        quote: randomQuote
    };
}
function getAllQuotes() {
    return _quotesJs.default;
}
function getAuthors(author) {
    if (author === undefined) return Object.keys(_quotesJs.default).sort();
    const foundAuthor = Object.keys(_quotesJs.default).find((key)=>key.toLowerCase() === author.toLowerCase());
    if (foundAuthor) return {
        author: foundAuthor,
        quotes: _quotesJs.default[foundAuthor]
    };
    const foundAuthors = Object.keys(_quotesJs.default).filter((key)=>key.toLowerCase().includes(author.toLowerCase())).sort();
    return foundAuthors;
}
function getStats() {
    const authorsArray = Object.keys(_quotesJs.default);
    let totalQuotes = 0;
    const quotesCounted = authorsArray.reduce((prev, curr)=>{
        const quotesNum = _quotesJs.default[curr].length;
        totalQuotes += quotesNum;
        prev[curr] = quotesNum;
        return prev;
    }, {});
    const quotesCountedSorted = Object.entries(quotesCounted).sort(([, v1], [, v2])=>v2 - v1);
    const quotesPerAuthor = Object.fromEntries(quotesCountedSorted);
    return {
        authors: authorsArray.length,
        quotes: totalQuotes,
        quotesPerAuthor
    };
}
function searchQuotes(searchTerm) {
    const searchResults = {};
    for (const [author, a_quotes] of Object.entries(_quotesJs.default)){
        for (const quote of a_quotes){
            if (quote.includes(searchTerm)) {
                if (!(author in searchResults)) searchResults[author] = [];
                searchResults[author].push(quote);
            }
        }
    }
    return searchResults;
}

//# sourceMappingURL=mockDB.js.map