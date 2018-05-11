const router = require('express').Router()
const quotes = require('../quotes/quotes.js')

router.get('/', (req, res) => {
	const response = Object.keys(quotes)
	res.end(JSON.stringify(response, null, 2));
});

router.get('/:author', (req, res) => {
	let response
	if (quotes[req.params.author] !== undefined) {
		response = {
			[req.params.author]: quotes[req.params.author]
		}
	} else {
		response = Object.keys(quotes).filter(key => key.toLowerCase().includes(req.params.author.toLowerCase()))
		if (response.length === 0) response = {
			'searched': req.params.author,
			'result': 'No matches'
		}
		if (response.length === 1) response = {
			[response[0]]: quotes[response[0]]
		}
	}
	res.end(JSON.stringify(response, null, 2));
});

module.exports = router;