var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});

const users = [
  { username: 'super', password: '123', roles: ['superadmin'] },
  // Add more user data here
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'super' && password === '123') {
    // Authentication successful
    res.status(200).json({ message: 'Authentication successful', user: { username } }); 
  } else {
    // Authentication failed
    res.status(401).json({ message: 'Authentication failed' });
  }
});

module.exports = app;
