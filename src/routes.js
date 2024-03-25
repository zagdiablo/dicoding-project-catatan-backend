const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler')


const routes = [
    {
        method: 'post',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'get',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'get',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        method: 'put',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        method: 'delete',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    }
];

module.exports = routes;