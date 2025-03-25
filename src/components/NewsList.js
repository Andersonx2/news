import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsList = ({ onEdit, onDelete }) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/news");
                setNews(response.data);
            } catch (error) {
                console.error("Erro ao buscar notícias", error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div>
            <h2>Lista de Notícias</h2>
            <ul>
                {news.map((item) => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                        <button onClick={() => onEdit(item.id)}>Editar</button>
                        <button onClick={() => onDelete(item.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsList;
