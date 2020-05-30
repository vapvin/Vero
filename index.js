import express from 'express';
const app = express();

const PORT = 4000

const handleListen = () =>console.log(`Listening On Port: http://localhost:${PORT}`);

const homeRes =(req, res) =>res.send(`<h1>Hello, World</h1>`);
const meRes = (req, res) => res.send("My Site");
const middles = (req, res, next) => {
    console.log('middles');
    next();
}

app.get("/", middles, homeRes);
app.get("/me", meRes);
app.listen(PORT, handleListen);