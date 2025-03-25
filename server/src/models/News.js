const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Autor = require("./Autor");

const News = sequelize.define("News", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    text: { type: DataTypes.TEXT, allowNull: false },
});

News.belongsTo(Autor, { foreignKey: "autorId" });
Autor.hasMany(News, { foreignKey: "autorId" });

module.exports = News;
