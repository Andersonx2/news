import { useState } from "react";
import axios from "axios";
import LoadingButton from "../components/Button";

export default function CreateNews({ setNews }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [nome, setNome] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [titleError, setTitleError] = useState("");
  const [textError, setTextError] = useState("");
  const [nomeError, setNomeError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTitleError("");
    setTextError("");
    setNomeError("");

    let valid = true;
    if (!title) {
      setTitleError("Título é obrigatório");
      valid = false;
    }
    if (!text) {
      setTextError("Texto é obrigatório");
      valid = false;
    }
    if (!nome) {
      setNomeError("Nome do autor é obrigatório");
      valid = false;
    }
    if (!valid) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/api/news", {
        title,
        text,
        nome,
      });
      setNews((prevNews) => [response.data, ...prevNews]);
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
    <div className="h-[400px] max-w-lg mx-auto mt-10 p-6 bg-gray-100 shadow-lg rounded-xl ">
      <h2 className="text-2xl font-bold mb-4 text-center">Crie aqui sua Notícia</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          {titleError && <div className="text-red-500 text-sm">{titleError}</div>}
        </div>

        <div>
          <textarea
            placeholder="Digite seu Texto"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          {textError && <div className="text-red-500 text-sm">{textError}</div>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Nome do autor"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          {nomeError && <div className="text-red-500 text-sm">{nomeError}</div>}
        </div>

        <LoadingButton
          onClick={handleSubmit}
          isLoading={isLoading}
          disabled={isLoading || !title || !text || !nome}
        >
          Criar Notícia
        </LoadingButton>
      </form>
    </div>
  );
}
