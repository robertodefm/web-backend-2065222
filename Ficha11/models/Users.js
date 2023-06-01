module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.INTEGER
        }
    });
}