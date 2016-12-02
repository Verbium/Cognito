/**
 * Created by Tim on 24/08/2016.
 */
var app = express();
/* GET home page. */
app.post('/wuk/cs/CognitoTab/v1/Shipments/', function(req, res) {
    //CognitoTab/v1/Shipments?deviceID={deviceid}&rel=oldest_unactioned
    res.send('POST request to the homepage');
});


module.exports = app;