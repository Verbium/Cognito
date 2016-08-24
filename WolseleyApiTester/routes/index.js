var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/CognitoTab/v1/Shipments', function(req, res, next) {
  //CognitoTab/v1/Shipments?deviceID={deviceid}&rel=oldest_unactioned
  res.render('index', { title: 'Express' });
});


module.exports = router;
