import Sequelize from 'sequelize';


module.exports = new Sequelize('hszdyxab', 'hszdyxab', '9LP05iSm_Ub3Pw_mc6XFjJ3YMZ25BcjB', {
    dialect: 'postgres',
    host: 'abul.db.elephantsql.com',
    username: 'hszdyxab',
    password: '9LP05iSm_Ub3Pw_mc6XFjJ3YMZ25BcjB',
    database: 'hszdyxab',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
  });