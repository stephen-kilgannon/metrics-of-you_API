const express = require('express');
const router = express.Router();
const model = require('../util/models/User');



/* GET users listing. */

router.get('/', async (req, res) => {
  const user = await model.User.find()
  res.send(user);
});

router.get('/me', async (req, res) => {
  const user = await model.User.findByName()
  res.send(user);
});

router.get('/goals', async (req, res) => {
  const usergoals= await model.User.findByName().populate('goals')
  res.send(usergoals);
});

router.post('/goal', function(req, res, next){
  var newgoal = new model.Goal(req.body);
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

router.post('/', function(req, res){
  var newUser = new model.User(req.body);
  newUser.save()
       .then(item => {
           res.json(newUser);
   })
   .catch(err => {
      console.log(err)
      res.status(400).send("unable to save to database");
   });
  });

  router.patch('/', function(req, res){
    var newUser = new model.User(req.body);
    newUser.save()
         .then(item => {
             res.json(newUser);
     })
     .catch(err => {
        console.log(err)
        res.status(400).send("unable to save to database");
     });
    });



module.exports = router;