import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../../config/config';


class File extends Model {}

File.init({
    name: {
        type : DataTypes.STRING,
        field: 'name',
    },
    path: {
        type : DataTypes.STRING,
        field: 'path',
    },
    url: {
        type : Sequelize.VIRTUAL,
        get() {
            return `localhost:3333/files/${this.path}`;
        }
    },
    created_at: {
        type : DataTypes.DATE,
        field: 'created_at',
    },


}, { sequelize, tableName: 'files' });


(async() => {
    await sequelize.sync();
    
})();

export default File;