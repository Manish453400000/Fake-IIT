import express from 'express';
import cors from 'cors';
import cookie from 'cookie';
import cookieParser from 'cookie-parser';

import {createServer} from 'http';


const app = express();
const server = createServer(app);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
)
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send("Hello world!");
})


export {server}
