var express = require('express');
var router = express.Router();

/* GET index page. */

router.use(function(req, res, next) {
  res.locals.date = getCurDate();
  next();
});

router.use

router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Enjoy the most beautiful city in the world!', 
    date: res.locals.date
     });
});


function getCurDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!

  var yyyy = today.getFullYear();
  if(dd<10){
      dd='0'+dd;
  } 
  if(mm<10){
      mm='0'+mm;
  } 
  return mm+'/'+dd+'/'+yyyy;
}

module.exports = router;
