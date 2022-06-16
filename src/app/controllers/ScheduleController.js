import User from "../models/User";
import Appointment from "../models/Appointment";
import { endOfDay, startOfDay, parseISO } from "date-fns";
import { Op } from 'sequelize';

class ScheduleController {
    async index(req, res) {

    

       

        const checkUser = await User.findOne({
            where: { id: req.userId, provider: true },
            attributes: ['id', 'name', 'email'],
        })

        if (!checkUser) {
            return res.status(401).json({ error: "Este usuário não é um colaborador" });
        }

        const {date} = req.query;

        const parsedDate = parseISO(date);

        const appointments = await Appointment.findAll({
            where: {
                collaborator_id: req.userId,
                canceled_at: null,
                date: {
                    [Op.between] : [startOfDay(parsedDate), endOfDay(parsedDate)],
                },
            },
            order:['date'],
        })

        return res.json(appointments);
    }
}


export default new ScheduleController();