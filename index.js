const app = require('express')()
const home = require('./routes/home.js')
const authors = require('./routes/authors.js')


app.use('/', home)
app.use('/authors', authors)






const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Servin at port: ' + port));