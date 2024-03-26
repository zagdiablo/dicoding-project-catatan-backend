
# dicoding-project-catatan-backend

A back-end API project to handle CRUD for Note keeping app on http://notesapp-v1.dicodingacademy.com/. made using Hapi for the purpose of finishing "Belajar Membuat Aplikasi Back-End untuk Pemula" course.
## Run Locally

Clone the project

```bash
  https://github.com/zagdiablo/dicoding-project-catatan-backend.git
```

Go to the project directory

```bash
  cd /into/your/directory/dicoding-project-catatan-backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run devStart
```


## API Reference

#### Get all notes

```http
  GET /notes
```

#### Get note by id

```http
  GET /notes/{id}
```
#### Delete note by id

```http
  DELETE /notes/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of note to fetch |

#### Add new note

```http
  POST /notes?title=<title>&tags=<tags>&body=<body>
```
#### Update new note

```http
  PUT /notes?title=<title>&tags=<tags>&body=<body>
```

| Query Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Title of note to add |
| `tags`      | `string` | Note tags |
| `body`      | `string` | Content of the note |





## Documentation

[Hapi tutorials](https://hapi.dev/tutorials/?lang=en_US)

