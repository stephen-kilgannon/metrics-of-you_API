const express = require('express');
const router = express.Router();
const User = require('../util/models/user');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next){
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