//load express
const express = require('express')

//crreate an instance of expess
const app =express()
const PORT = 3000

//Middleware functions
//They update the request as soon as they coe in.

app.use((req, res, next) => {
    console.log('Running the middleware function!')
    next() //Go to the next middleware or the response.
})

//JSON Middleware
app.use(express.json())

//if we don't need to read data from the url
app.use(express.urlencoded({extended: false}))

//Set up view engine
app.set('view engine', 'ejs')
app.set('views', './Views')

//Root route
app.get('/', (req, res) => {
    res.render('home', {pageTitle: 'Home Page', h1: 'Welcome Home!!!'})
})

app.get('/about-me', (req, res) => {
    res.render('home', {pageTitle: 'About-Me',h1: 'This is about me!'})
})
app.get('/about-you', (req, res) => {
    res.render('home', {pageTitle: 'About-Me',h1: 'This is about you!'})
})
app.get('/the-time',(req, res ) => {
    res.render('home', {pageTitle: 'The_Time',h1: 'What time is it?'})
})
app.get('/the-best-day',(req, res ) => {
    res.render('home', {pageTitle: 'Best-Day',h1: 'My best day is here.'})
})

app.get('/persons', (req, res) => {
    res.render('persons', {pageTitle: 'Home Page', h1: 'Welcome Home!!!', p: "There's no place like home!!!"})
})

app.get('/aboutMe', (req, res) => {
    res.render('persons', {pageTitle: 'About-Me',h1: 'This is about me!', p: 'Sometimes you just got to have some me time'})
})
app.get('/persons/about-you', (req, res) => {
    res.render('persons', {pageTitle: 'About-Me',h1: 'This is about you!', p: "Today it's all about you "})
})
app.get('/persons/the-time',(req, res ) => {
    res.render('persons', {pageTitle: 'The_Time',h1: 'What time is it?', p: "It's time to get right."})
})
app.get('/persons/the-best-day',(req, res ) => {
    res.render('persons', {pageTitle: 'Best-Day',h1: 'My best day is here.',p: 'Praise the Lord'})
})


app.listen(PORT, () => {
    console.log('Server is running...')
})