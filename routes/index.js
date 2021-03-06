var express = require('express');
var router = express.Router();
var swPrecache = require('sw-precache');
var path = require('path');


// Generate sw using the sw-precache config file
var swPrecacheConfig = require('./../sw-precache-config.js');
swPrecache.write(path.join(__dirname,
    '/../public/generated-service-worker.js'), swPrecacheConfig,
    function(err) {
  if (err) console.log(err);
});

/* GET all pages */

router.use(function(req, res, next) {
  res.locals.date = getCurDate();
  next();
});

router.get('/content/:category', function(req, res, next) {
  var catId = req.params.category;
  res.render('content', {title: catId, cat:catId});
});

router.get('/app-shell', function(req, res, next) {
  res.render('content', {title:'Offline', cat:{}});
});

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
