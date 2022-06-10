import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../../config/config';

class User extends Model {}

User.init({
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.VIRTUAL, // Virtual field - not stored in database
    password_hash: Sequelize.STRING,
    provider: Sequelize.BOOLEAN,

}, { sequelize, tableName: 'users' });

(async() => {
    await sequelize.sync();

})();

export default User;