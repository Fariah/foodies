var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    cors = require('cors'),
    Rooms = require('./api/models/roomsModel'),
    Foods = require('./api/models/foodsModel'),
    Contributions = require('./api/models/contributionsModel'),
    Users = require('./api/models/usersModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Foodiesdb');

// cors({credentials: true, origin: true});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


var routes = require('./api/routes/routes');
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);


console.log('API server started on: ' + port);