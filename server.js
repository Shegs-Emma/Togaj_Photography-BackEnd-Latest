const   http    = require('http'),
        app     = require('./app');

app.set('port', process.env.PORT || 3001);

const server = http.createServer(app);


server.listen(process.env.PORT || 3001);