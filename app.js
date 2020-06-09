import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import userRouter from './Router/userRouter';
import videoRouter from './Router/videoRouter';
import mainRouter from './Router/mainRouter';
import routes from './routes';

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
app.use(logger("dev"));

app.use((req, res, next) => {

})

app.use(routes.main, mainRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;