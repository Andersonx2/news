import { useState, useEffect } from "react";
import axios from "axios";
import LoadingButton from "../components/Button";

export default function CreateNews({ setNews }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [nome, setNome] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/news", {
        title,
        text,
        nome,
      });
      setNews((prevNews) => [response.data, ...prevNews]); // Atualiza a lista com a nova notícia
      setTitle("");
      setText("");
      setNome("");
    } catch (error) {
      console.error("Erro ao criar notícia:", error);
    } finally {
      setIsLoading(false);
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
          type="text"
          placeholder="Nome do autor"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <LoadingButton onClick={handleSubmit} isLoading={isLoading}>
          Criar Notícia
        </LoadingButton>
      </form>
    </div>
  );
}