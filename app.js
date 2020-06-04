import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import userRouter from './Router/userRouter';
import videoRouter from './Router/videoRouter';
import mainRouter from './Router/mainRouter';

const app = express();


const homeRes =(req, res) =>res.send(`<h1>Hello, World</h1>`);
const meRes = (req, res) => res.send("My Site");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
app.use(helmet());
app.use(logger("dev"));

app.use("/", mainRouter);

app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;