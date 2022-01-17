var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://0.0.0.0:27017/TodoApp');

module.exports = {
    mongoose: mongoose
}