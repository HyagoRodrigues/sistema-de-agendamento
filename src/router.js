import { Router } from "express";
import multer from 'multer';
import multerConfig from "./config/multer";
import UserControllers from "./app/controllers/UserControllers";
import SessionController from "./app/controllers/SessionController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
const uploads = multer(multerConfig);

routes.post('/users', UserControllers.store);

routes.post('/session', SessionController.store);

// rotas autenticadas
routes.use(authMiddleware)
routes.put('/users',  UserControllers.update)

// rotas de uploads
routes.post('/files', uploads.single('file'), (req, res) => {
    return res.json({ message: "ok" });
})



export default routes;