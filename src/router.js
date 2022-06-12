import { Router } from "express";
import UserControllers from "./app/controllers/UserControllers";
import SessionController from "./app/controllers/SessionController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post('/users', UserControllers.store);

routes.post('/session', SessionController.store);

// rotas autenticadas
routes.use(authMiddleware);
routes.put('/users', UserControllers.update);


export default routes;