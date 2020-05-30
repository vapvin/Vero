import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
const app = express();

const PORT = 4000

const handleListen = () =>console.log(`Listening On Port: http://localhost:${PORT}`);

const homeRes =(req, res) =>res.send(`<h1>Hello, World</h1>`);
const meRes = (req, res) => res.send("My Site");

app.use(helmet())
app.use(logger("dev"))

app.get("/", homeRes);
app.get("/me", meRes);
app.listen(PORT, handleListen);