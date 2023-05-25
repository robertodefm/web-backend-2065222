module.exports = (sequelize, DataTypes) => {
    return sequelize.define('book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author_name: {
            type: DataTypes.STRING
        },
        publication_date: {
            type: DataTypes.DATE
        },
        genre: {
            type: DataTypes.STRING
        },
        available_copies: {
            type: DataTypes.INTEGER
        }
    });
}