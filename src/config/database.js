module.exports = {
    development: {
    dialect: 'postgres',
    host: 'abul.db.elephantsql.com',
    username: 'hszdyxab',
    password: '9LP05iSm_Ub3Pw_mc6XFjJ3YMZ25BcjB',
    database: 'hszdyxab',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',

    },
    dialectOptions: {
        bigNumberStrings: true
    }
    },
    test: {
        dialect: 'postgres',
    host: 'abul.db.elephantsql.com',
    username: 'hszdyxab',
    password: '9LP05iSm_Ub3Pw_mc6XFjJ3YMZ25BcjB',
    database: 'hszdyxab',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',

    },
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    production: {
        dialect: 'postgres',
    host: 'abul.db.elephantsql.com',
    username: 'hszdyxab',
    password: '9LP05iSm_Ub3Pw_mc6XFjJ3YMZ25BcjB',
    database: 'hszdyxab',
        define: {
            timestamps: true,
            underscored: true,
            underscoredAll: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at',

        },
    }
};


