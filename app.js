const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
    res.send('and another hello')
})

app.get('/Home', (req, res) => {
    res.send('and another hello from home page.... well sever')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})