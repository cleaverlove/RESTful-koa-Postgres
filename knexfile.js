
var path = require('path');
var BASE_PATH = path.join(__dirname, 'src', 'server', 'db');
/*
    postgresql超级用户 passport: pmx123  port: 5432
*/

module.exports = {
    test: {
        client: 'pg',
        connection: 'postgres://username:password@localhost:5432/koa_api_test',
        migrations: {
            directory: path.join(BASE_PATH, 'migrations')
        },
        seeds: {
            directory: path.join(BASE_PATH, 'seeds')
        }
    },
    development: {
        client: 'pg',
        connection: 'postgres://username:password@localhost:5432/koa_api',
        migrations: {
            directory: path.join(BASE_PATH, 'migrations')
        },
        seeds: {
            directory: path.join(BASE_PATH, 'seeds')
        }
    }
}