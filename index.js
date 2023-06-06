// import express from 'express';
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Choo Choo! Welcome to your Express app 🚅');
// })

// app.get("/json", (req, res) => {
//     res.json({"Choo Choo": "Welcome to your Express app 🚅"});
// })

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
import jsonServer from "json-server";
import path from "path";

const server = jsonServer.create();

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// // Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
// server.use(async (req, res, next) => {
//   await new Promise((res) => {
//     setTimeout(res, 800);
//   });
//   next();
// });

server.use(router);

// запуск сервера
server.listen(8000, () => {
  console.log("server is running on 8000 port");
});
