import { useState, useEffect } from "react";
import axios from "axios";
import LoadingButton from "./Button"
import NewsList from "./NewsList";

export default function CreateNews() {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [autorId, setAutorId] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/news");
      setNews(response.data);
    } catch (error) {
      console.error("Erro ao carregar notícias:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/news", {
        title,
        text,
        autorId,
      });
      // Atualiza a lista sem recarregar
      setNews((prevNews) => [response.data, ...prevNews]);
      setTitle("");
      setText("");
      setAutorId("");
    } catch (error) {
      console.error("Erro ao criar notícia:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/news/${id}`);
      setNews(news.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Erro ao excluir notícia:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Crie aqui sua Notícia
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Digite seu Texto"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Autor ID"
          value={autorId}
          onChange={(e) => setAutorId(e.target.value)}
          required
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <LoadingButton onClick={handleSubmit} isLoading={isLoading}>
          Criar Notícia
        </LoadingButton>
      </form>

      <h3 className="text-xl font-semibold mt-6 text-center mb-12">Lista de Notícias</h3>
      <NewsList news={news} onDelete={handleDelete} />
    </div>
  );
}
