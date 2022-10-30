#!/usr/bin/env node


const quotes = require('./src/databases/quotes.js')

// console.log(quotes)
const searchTerm = 'dream'
const searchResults = {}

for (let [author, a_quotes] of Object.entries(quotes)) {
//  console.log( a_quotes)

  for (quote of a_quotes) {
//console.log(quote)
    if (quote.includes(searchTerm)) {
      if (! (author in searchResults)) searchResults[author] = []
      searchResults[author].push(quote)
    }
  }
}
console.log(searchResults)
