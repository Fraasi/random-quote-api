const router = require('express').Router()
const quotes = require('../quotes/quotes.js')

router.get('/', (req, res) => {
	const authors = Object.keys(quotes)
	const random = authors[Math.floor(Math.random() * authors.length)]
	let quote = quotes[random]
	if (quote.length > 0) {
		quote = quote[Math.floor(Math.random() * quote.length)]
	} else {
		quote = quote[0]
	}
	const response = {
		[random]: quote
	}
	res.end(JSON.stringify(response, null, 2));
});

router.get('/all', (req, res) => {
	res.end(JSON.stringify(quotes, null, 2));
})
module.exports = router;