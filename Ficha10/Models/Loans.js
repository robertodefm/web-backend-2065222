module.exports = (sequelize, DataTypes) => {
    return sequelize.define('book', {
        loan_date: {
            type: DataTypes.DATE
        },
        return_date: {
            type: DataTypes.DATE
        }
    });
}