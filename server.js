const   http    = require('http'),
        path    = require('path'),
        express     = require('express'),
        app     = require('./app');

if (process.env.NODE_ENV === 'production') {
    //Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.set('port', process.env.PORT || 3001);

const server = http.createServer(app);


server.listen(process.env.PORT || 3001);