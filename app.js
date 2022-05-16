const { response } = require('express')
const express = require('express')
const app = express()
const port = 4000
const user = {
    FirstName: 'antonio',
    LastName: 'ruiz',
    email: "antonio.Ruiz@gmail.com",
    UserName: "antRuiz"
}

app.get('/', (req, res) => {

    res.status(200), res.send('Antonio Ruiz' + 'status code is: ' + res.statusCode)

})

app.get('/Home', (req, res) => {
    res.status(203), res.send('home page' + 'status code is: ' + res.statusCode)

})
app.get('/user', (req, res) => {

    res.send(user.FirstName + user.LastName)
})

app.get('*', (req, res) => {
    res.status(404), res.send('catch all route' + 'status code is: ' + res.statusCode)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})