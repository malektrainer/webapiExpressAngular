var express = require('express');
var app = express();

var students = [
    { id: 1, name: "James Soup", age: 21 },
    { id: 2, name: "Humain yo", age: 20 },
    { id: 3, name: "Hammer tomms", age: 22 }
];

app.use(express.static(__dirname + '/www'));

app.get('/api/student', function (req, res) {
    res.json(students);
});

app.get('/api/student/:id', function (req, res) {
    var id = req.params.id * 1; // convert to number
    var student = students[id - 1];
    if (student) {
        res.json(student);
    }
    else {
        res.status(404).send('Sorry, we cannot find that student!');
    }
});
app.listen(3000, function () {
    console.log('Student Api listening on http://localhost:3000!');
});