const News = require("../models/News"); 


exports.createNews = async (req, res) => {
    try {
        const { title, text, autorId } = req.body;

        if (!title || !text || !autorId) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
        }

        const news = await News.create({ title, text, autorId });
        res.status(201).json(news);
    } catch (error) {
        console.error("Erro ao criar notícia:", error); // Exibir erro no terminal
        res.status(500).json({ error: "Erro ao criar esta notícia.", detalhes: error.message });
    }
};

exports.editNews = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, text } = req.body;

        const news = await News.findByPk(id); 

        if (!news) {
            return res.status(404).json({ error: "Notícia não encontrada." });
        }

        news.title = title || news.title;
        news.text = text || news.text;
        await news.save();

        res.json(news);
    } catch (error) {
        console.error("Erro ao editar notícia:", error);
        res.status(500).json({ error: "Erro ao editar notícia.", detalhes: error.message });
    }
};

exports.deleteNews = async (req, res) => {
    try {
        const { id } = req.params;
        const news = await News.findByPk(id); 

        if (!news) {
            return res.status(404).json({ error: "Notícia não encontrada." });
        }

        await news.destroy();
        res.json({ message: "Notícia excluída com sucesso!" });
    } catch (error) {
        console.error("Erro ao excluir notícia:", error);
        res.status(500).json({ error: "Erro ao excluir notícia.", detalhes: error.message });
    }
};
