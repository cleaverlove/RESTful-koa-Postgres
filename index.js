
var koa = require('koa');
var Router = require('koa-router');
var router = new Router();
var app = new koa();

var port = process.env.PORT || 3000;

app.use(async (ctx) => {
    ctx.body = {
        status: 'success',
        message: 'hello,world'
    }
});

/*
//generators will be removed in v3
app.use(function *() {
    this.body = 'hello,world';
})

//命名路由 /
router.get('/api','/',(ctx, next) => {
    ctx.body = 'hello api';
})
app.use(router.routes());
*/
var server = app.listen(port, function() {
    console.log('Server listening on port:' + port);
});

module.exports = server;