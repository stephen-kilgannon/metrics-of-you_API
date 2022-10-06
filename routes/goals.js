const express = require('express');
const router = express.Router();
const Goal = require('../util/models/Goal');


/* GET tasks listing. */

router.get('/', async (req, res, next) => {
  const goal = await Goal.find()
  res.send(goal);
});

router.get('/me', async (req, res, next) => {
  const goal = await Goal.findByName('stephen')
  res.send(goal);
});

router.post('/', function(req, res, next){
  var newgoal = new Goal(req.body);
  newgoal.save()
       .then(item => {
            console.log(item)
           res.json(newgoal);
   })
   .catch(err => {
      console.log(err)
      res.status(400).send("unable to save to database");
   });
  });


module.exports = router;