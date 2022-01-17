var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/TodoApp');

module.exports = {
    mongoose: mongoose
}