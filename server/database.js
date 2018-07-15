const mongoose = require('mongoose');
const URI = 'mongodb://localhost/db-crud-mean';

mongoose.connect(URI)
    .then(db => console.log('DB is connect'))
    .catch(err => console.error(err));

module.exports = mongoose;