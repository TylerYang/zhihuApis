var _ = require("lodash");
var topics = require("./topics");

var apiList= [topics];

var apis = {};
_.forEach(apiList, function(obj) {
    _.extend(apis, obj);
});



module.exports = apis;
