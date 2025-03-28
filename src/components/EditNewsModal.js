import React, { useState, useEffect } from "react";
import axios from "axios";

const EditNewsModal = ({ newsItem, isOpen, onClose, onUpdate }) => {
  const [title, setTitle] = useState(newsItem?.title || "");
  const [text, setText] = useState(newsItem?.text || "");
  const [nome, setNome] = useState(newsItem?.autor || "");

  useEffect(() => {
    if (newsItem) {
      setTitle(newsItem.title);
      setText(newsItem.text);
      setNome(newsItem.autor);
    }
  }, [newsItem]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando atualização para a notícia:", newsItem.id);
  
    try {
      const response = await axios.put(`http://localhost:3000/api/news/${newsItem.id}`, {
        title,
        text,
        nome,
      });
      console.log("Resposta do backend:", response.data);
      
      // Atualiza a lista de notícias no componente pai com os dados retornados
      onUpdate(response.data);
      console.log("Atualização enviada para o componente pai.");
      
      // Fecha o modal após a atualização
      onClose();
      console.log("Modal fechado após a atualização.");
    } catch (error) {
      console.error("Erro ao editar notícia:", error);
    }
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Editar Notícia</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Texto</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Nome do Autor</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Atualizar
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNewsModal;
