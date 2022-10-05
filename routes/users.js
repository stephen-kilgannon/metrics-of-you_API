const express = require('express');
const router = express.Router();
const User = require('../util/models/User');


/* GET users listing. */

router.get('/', async (req, res) => {
  const user = await User.find()
  res.send(user);
});

router.get('/me', async (req, res) => {
  const user = await User.findByName('stephen')
  res.send(user);
});

router.post('/', function(req, res){
  var newUser = new User(req.body);
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