// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

// module.exports = mongoose.connection;

const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Only apply TLS options for Atlas connection
if (uri.startsWith('mongodb+srv://')) {
    options.tls = true;
    options.tlsInsecure = false;
    options.tlsAllowInvalidCertificates = false;
}

mongoose.connect(uri, options);

module.exports = mongoose.connection;