const News = require("../models/News"); 
const Autor = require("../models/Autor");

exports.createNews = async (req, res) => {
    try {
        const { title, text, nome } = req.body;
        if (![title, text, nome].every(Boolean)) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
        }

        const [autor] = await Autor.findOrCreate({ where: { nome } });
        const news = await News.create({ title, text, autorId: autor.id });

        return res.status(201).json({
            id: news.id,
            title: news.title,
            text: news.text,
            autor: autor.nome,
        });
        
    } catch (error) {
        console.error("Erro ao criar notícia:", {
            message: error.message,
            stack: error.stack,
        });
        return res.status(500).json({ error: "Erro ao criar esta notícia.", detalhes: error.message });
    }
};




exports.listNews = async (req, res) => {
    try {
      const newsList = await News.findAll({
        include: [{
          model: Autor,
          as: 'autor', // Certifique-se de que a associação em News está definida com o alias 'autor'
          attributes: ['nome']
        }]
      });
  
      const result = newsList.map(news => ({
        id: news.id,
        title: news.title,
        text: news.text,
        autor: news.autor.nome
      }));
  
      return res.json(result);
    } catch (error) {
      console.error("Erro ao listar notícias:", error);
      return res.status(500).json({ error: "Erro ao listar notícias.", detalhes: error.message });
    }
  };
  


exports.autorId = async (req, res) => {
    try {
        const news = await News.findAll();
        res.json(news);
    } catch (error) {
        console.error("Erro ao listar notícias:", error);
        res.status(500).json({ error: "Erro ao listar notícias.", detalhes: error.message });
    }
};


exports.editNews = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, text, nome } = req.body; // Incluindo nome do autor aqui
        const news = await News.findByPk(id);

        if (!news) {
            return res.status(404).json({ error: "Notícia não encontrada." });
        }

        // Atualizando o título e o texto
        news.title = title || news.title;
        news.text = text || news.text;

        // Verificando se o nome do autor foi enviado e atualizando o autor, se necessário
        if (nome) {
            const [autor] = await Autor.findOrCreate({ where: { nome } });
            news.autorId = autor.id;  // Associando o autor à notícia
        }

        await news.save();

        // Buscando o autor para enviar junto na resposta
        const autor = await Autor.findByPk(news.autorId);

        // Retornando somente os dados necessários
        res.json({
            id: news.id,
            title: news.title,
            text: news.text,
            autor: autor.nome,
        });
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
