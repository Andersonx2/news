import React, { useState } from "react";
import EditNewsModal from "../components/EditNewsModal";
import axios from "axios";

export default function NewsList({ news = [], onDelete, setNews }) { 

  const [selectedNews, setSelectedNews] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleEditClick = (newsItem) => {
    setSelectedNews(newsItem);
    setModalOpen(true);
    console.log("Modal aberto para a notícia:", newsItem.id);
  };



  const handleUpdateNews = async (updatedNews) => {
    try {
      const response = await axios.get("http://localhost:3000/api/news");
      console.log("Estado atualizado:", response.data);
      
      // Atualiza a lista no estado global
      setNews(response.data);

      // Fecha o modal após 1 segundo
      setTimeout(() => {
        handleCloseModal();
      }, 1000);
      
    } catch (error) {
      console.error("Erro ao buscar notícias atualizadas:", error);
    }
  };
  

  const handleCloseModal = () => {
    console.log("Fechando modal.");
    setModalOpen(false);
    setSelectedNews(null);
  };



  return (
    <div className="space-y-4">
      {news.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">
          Nenhuma notícia disponível.
        </p>
      ) : (
        news.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white shadow rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
              <p className="text-gray-600">Autor: {item.autor}</p>
            </div>
            <div className="flex space-x-2">
              <button

                onClick={() => onDelete(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Excluir
              </button>
              <button
                onClick={() => handleEditClick(item)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Editar
              </button>
            </div>
          </div>
        ))
      )}

      {selectedNews && (
        <EditNewsModal
          newsItem={selectedNews}
          isOpen={modalOpen}
          onClose={handleCloseModal}
          onUpdate={handleUpdateNews}
        />
      )}
    </div>
  );
}
