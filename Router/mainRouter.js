import express from 'express';
import routes from '../routes';

const mainRouter = express.Router();

mainRouter.get(routes.main, (req, res) => res.send('Home'));
mainRouter.get(routes.signup, (req, res) => res.send('Signup'));
mainRouter.get(routes.signin, (req, res) => res.send('Signin'));
mainRouter.get(routes.signout, (req, res) => res.send('Signout'));
mainRouter.get(routes.search, (req, res) => res.send('Search'));

export default mainRouter;