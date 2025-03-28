import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import axios from "axios";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/news");
        setNews(response.data);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/news/${id}`);
      setNews((prevNews) => prevNews.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Erro ao deletar notícia:", error);
    }
  };
  
  return <Home news={news} setNews={setNews} onDelete={handleDelete} />;
}

export default App;