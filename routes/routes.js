const routes = [
    {
        method: 'get',
        path: '/',
        handler: (request, h) => {
            return '<h1>Home page</h1>'
        }
    }
]

module.exports = routes