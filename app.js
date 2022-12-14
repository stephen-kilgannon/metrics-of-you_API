/* eslint-disable no-undef */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');
const goalsRouter = require('./routes/goals');


const app = express();

mongoose.connect('mongodb+srv://admin:admin@typescript.2cbfrnv.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log("DB connected")
}, e => console.error(e)),

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);
app.use('/goals', goalsRouter);

module.exports = app;
