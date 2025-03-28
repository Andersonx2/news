const sequelize = require("./database");
const Autor = require("../models/Autor");
const News = require("../models/News");

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log("Banco de dados sincronizado!");

        // Criar um autor inicial para testes
        await Autor.create({ nome: "Autor Teste" });
    } catch (error) {
        console.error("Erro ao sincronizar banco de dados:", error);
    }
};

syncDatabase();
