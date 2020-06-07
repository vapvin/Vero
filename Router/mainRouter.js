import express from 'express';
import routes from '../routes';
import { main, search } from '../controller/videoController';
import { singUp, signIn, signOut } from '../controller/userController';

const mainRouter = express.Router();

mainRouter.get(routes.main, main);
mainRouter.get(routes.signup, singUp);
mainRouter.get(routes.signin, signIn);
mainRouter.get(routes.signout, signOut);
mainRouter.get(routes.search, search);

export default mainRouter;