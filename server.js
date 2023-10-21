import express from 'express';
import cors from 'cors';
import http from 'http';
import router from "./app/routes.js";
import config from './config/app.js';

const app = express();

const server = http.Server(app);

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
app.use(express.json());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Cheeta Ltd order manager." });
});

//Importation des routes
app.use('/api/order', router);

// set port, listen for requests
const PORT = config.port;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

