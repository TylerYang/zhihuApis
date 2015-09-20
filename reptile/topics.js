var koa = require("koa");
var _ = require("lodash");
var rekuire = require("rekuire");

var conf = rekuire("reptile/conf/topics.json");
var helpers = rekuire("reptile/helpers");

function getTopicList() {
    function fetchTopicList(resolve, reject) {
        var _fetchSuccessCB = _.bind(fetchSuccessCB, null, _, resolve);
        var _fetchErrorCB = _.bind(fetchErrorCB, null, _, reject);

        helpers.fetchPage(conf.url).then(_fetchSuccessCB, resolve);
    }

    function fetchSuccessCB(window, resolve) {
        var $ = window.$;
        var list = $(".zm-topic-cat-main li");
        var data = [];

        list.each(function () {
            data.push({
                zId: $(this).attr("data-id"),
                val: $(this).text()
            });
        });

        return resolve(data);
    }

    function fetchErrorCB(err, reject) {
        return reject(err);
    }

    return new Promise(fetchTopicList);
}

function getSubTopicListById(topicId) {


}

module.exports = {
    getTopicList: getTopicList,
    getSubTopicListById: getSubTopicListById
};
