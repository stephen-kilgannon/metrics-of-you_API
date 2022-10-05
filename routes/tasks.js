const express = require('express');
const router = express.Router();
const Task = require('../util/models/Task');


/* GET tasks listing. */

router.get('/', async (req, res, next) => {
  const task = await Task.find()
  res.send(task);
});

router.get('/me', async (req, res, next) => {
  const task = await Task.findByName('stephen')
  res.send(task);
});

router.post('/', function(req, res, next){
  var newtask = new Task(req.body);
  newtask.save()
       .then(item => {
            console.log(newtask)
           res.json(newtask);
   })
   .catch(err => {
      console.log(err)
      res.status(400).send("unable to save to database");
   });
  });


module.exports = router;