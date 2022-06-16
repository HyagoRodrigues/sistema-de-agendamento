import { Router } from "express";
import multer from 'multer';
import multerConfig from "./config/multer";
import FileController from "./app/controllers/FileController";
import UserControllers from "./app/controllers/UserControllers";
import SessionController from "./app/controllers/SessionController";
import CollaboratorController from "./app/controllers/CollaboratorController";
import AppointmentController from "./app/controllers/AppointmentController";

import authMiddleware from "./app/middlewares/auth";
import { roundToNearestMinutes } from "date-fns";
import ScheduleController from "./app/controllers/ScheduleController";

const routes = new Router();
const uploads = multer(multerConfig);

routes.post('/users', UserControllers.store);

routes.post('/session', SessionController.store);

// rotas autenticadas
routes.use(authMiddleware)
routes.put('/users',  UserControllers.update);

//Rota de agendamento
routes.post('/appointments', AppointmentController.store);

//Lista de agendamentos
routes.get('/appointments', AppointmentController.index);

//Lista de colaboradores
routes.get('/collaborator', CollaboratorController.index);

//Lista de agendamentoss de um colaborador
routes.get('/schedule', ScheduleController.index)

// rotas de uploads
routes.post('/files', uploads.single('file'), FileController.store);


export default routes;