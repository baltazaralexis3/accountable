var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,
    {useNewUrlParser: true}
    );

mongoose.connection.on('connected', function () {
    console.log(`mongoose connected to: ${process.env.DATABASE_URL}`);
});

module.exports = mongoose;
