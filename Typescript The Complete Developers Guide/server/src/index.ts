import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';

// CREATE APP
const app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['lasfjaf'] })); // ADD SESSION TO REQ PROPERTY

// ROUTER
app.use(router);
app.use(AppRouter.getInstance());

// APP LISTENING PORT
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
