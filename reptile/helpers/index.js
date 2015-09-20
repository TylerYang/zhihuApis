var jsdom = require("jsdom");
var rekuire = require("rekuire");
var conf = rekuire("reptile/conf/main");

function fetchPage(url) {
    var promise = new Promise(function (resolve, reject) {
        jsdom.env({
            url: url,
            headers: {
                //without useragent we will get 403 forbidden error
                'User-Agent': conf.userAgent
            },
            scripts: ["http://code.jquery.com/jquery.js"],
            done: function (err, window) {
                if (err) return reject(err);
                return resolve(window);
            }
        });
    });
    return promise;
}

module.exports = {
    fetchPage: fetchPage
};

