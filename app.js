const   express     = require('express'),
        app         = express(),
        fileUpload  = require('express-fileupload'),
        bodyParser  = require('body-parser'),
        cors        = require('cors'),
        path        = require('path'),
        mongoose    = require('mongoose');

const userName  = 'togaj_\photography';
const photoRoutes = require('./routes/photo');
const userRoutes = require('./routes/user');
const contactRoutes = require('./routes/contact');

const whitelist = ['http://localhost:3001', 'http://localhost:8080', 'https://enigmatic-eyrie-76099.herokuapp.com'];
const corsOptions = {
    origin: function (origin, callback) {
        console.log("** Origin of request " + origin);
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            console.log("Origin accepted")
            callback(null, true)
        } else {
            callback(new Error('Not allowed by cors'))
        }
    }
}

app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Installed express-fileUpload and it helped me the the tempFiles path that i sent to cloudinary
app.use(fileUpload({
    useTempFiles: true
}));

mongoose.connect(`mongodb+srv://${userName}:M%40rch041992M@cluster0-tbg4m.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.log('Something went wrong');
        console.error(error);
    });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//========================================MY ROUTES==========================================
app.use('/api/photos', photoRoutes);

app.use('/api/auth', userRoutes);

app.use('/api/contact', contactRoutes);
//===========================AUth===================================================
app.get('/api/login', (req, res, next) => {
    console.log(req.body);
})


//================================LISTENER===========================================================


module.exports = app;