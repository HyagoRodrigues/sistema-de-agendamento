import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../../config/config';
import User from './User';

class Appointment extends Model {}

Appointment.init({
    appointmentDate: {
        type : DataTypes.DATE,
        field: 'date',
    },
    canceled_at: {
        type : DataTypes.DATE,
        field: 'canceled_at',
    },
    created_at: {
        type : DataTypes.DATE,
        field: 'created_at',
    },


}, { sequelize, modelName: 'Appointment', tableName: 'appointments' });

(async() => {
    await sequelize.sync();
    
})();

Appointment.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user',
});

Appointment.belongsTo(User, {
    foreignKey: 'collaborator_id',
    as: 'collaborator',
});




export default Appointment;