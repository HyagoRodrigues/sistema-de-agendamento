import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../../config/config';


class File extends Model {}

File.init({
    name: Sequelize.STRING,
    path: Sequelize.STRING,

}, { sequelize, tableName: 'files' });


(async() => {
    await sequelize.sync();
    
})();

export default File;