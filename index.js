const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT ||5000

app.use(cors())

const allcourse = require('./courses.json')
const courses = require('./course.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/courses', (req, res) => {
    res.send(allcourse)
});

app.get('/course', (req, res) => {
    res.send(courses)
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id
    const filterCourse = courses.filter(c => c.course_id === id);
    res.send(filterCourse);
});

app.get('/select/:id', (req, res) => {
    const id = req.params.id
    const selectCourse = courses.find(c => c._id === id);
    res.send(selectCourse);
});


app.listen(port, () => {
    console.log(`KTschools running on ${port}`)
});