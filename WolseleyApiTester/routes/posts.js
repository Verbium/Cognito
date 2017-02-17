/**
 * Created by Tim on 24/08/2016.
 */
var app = express();
/* GET home page. */

// parameter middleware that will run before the next routes
app.param('shipmentId', function(req, res, next, shipmentId) {
    req.shipmentId = shipmentId;
    next();
});

app.post('wuk/cs/CognitoTab/v1/Shipments/:shipmentId/state', function(req, res) {
    //CognitoTab/v1/Shipments?deviceID={deviceid}&rel=oldest_unactioned
    res.end('POST request to the homepage');
});


module.exports = app;