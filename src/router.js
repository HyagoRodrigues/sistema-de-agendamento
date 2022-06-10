import { Router } from "express";
import UserControllers from "./app/controllers/UserControllers";
import SessionController from "./app/controllers/SessionController";



const routes = new Router();

routes.post('/users', UserControllers.store);

routes.post('/session', SessionController.store);


export default routes;