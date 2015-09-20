var koa = require("koa");
var app = koa();

var reptile = require("./reptile");


app.use(function *(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log("%s %s - %s", this.method, this.url, ms);
});

app.use(function *() {
    var data = yield reptile.getTopicList();
    this.body = data;
});

app.listen(3000);
