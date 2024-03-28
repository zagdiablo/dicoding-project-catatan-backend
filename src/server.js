const hapi = require('@hapi/hapi');
const routes = require('./routes');


const init = async () => {
    const server = hapi.Server({
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        port: 6969,
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log(`Server started on: ${server.info.uri}`);
};
process.on('unhandledRejection', (err) => {
    console.log(`${err.name}: ${err.message}`);
});
init();
