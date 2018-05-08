const fs = require('fs')
const http = require('http')
const https = require('https')
const privateKey = fs.readFileSync('./server.key', 'utf8')
const certificate = fs.readFileSync('./server.crt', 'utf8')
const credentials = {key: privateKey, cert: certificate}
const express = require('express')
const util = require('util');
const bodyParser = require('body-parser')
const logger = require('morgan')
const methodOverride = require('method-override')
const connect = require('connect')
const expressSession = require('express-session')
const cookieParser = require('cookie-parser')
const csrf = require('csurf')
const cors = require('cors')
const multer = require('multer')
const multipart = multer()
const app = express()

app.set('views', `${__dirname}/dist`);
app.set('view engine', 'ejs');

app.use(express.static(__dirname));
app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.render('index', {title: 'tweets'});
});

const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials, app)

httpServer.listen(process.env.PORT || 3300)
httpsServer.listen(process.env.PORT || 18000)
console.log('Listening to http port:3300 and https port:18000')