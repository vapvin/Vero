import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
const app = express();

const PORT = 4000

const handleListen = () =>console.log(`Listening On Port: http://localhost:${PORT}`);

const homeRes =(req, res) =>res.send(`<h1>Hello, World</h1>`);
const meRes = (req, res) => res.send("My Site");
const searchHandler = (req, res) => res.send("Search Pages");
const signUp = (req, res) => res.send("Sign Up!!");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
app.use(helmet());
app.use(logger("dev"));

app.get("/", homeRes);
app.get("/me", meRes);
app.get("/search", searchHandler);
app.get("/signup", signUp); // Change Post Method
app.listen(PORT, handleListen);