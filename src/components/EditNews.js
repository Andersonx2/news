import React, { useState, useEffect } from "react";
import axios from "axios";

const EditNews = ({ match, history }) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [autorId, setAutorId] = useState("");

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/news/${match.params.id}`);
                setTitle(response.data.title);
                setText(response.data.text);
                setAutorId(response.data.autorId);
            } catch (error) {
                console.error("Erro ao buscar notícia para editar", error);
            }
        };
        fetchNews();
    }, [match.params.id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/news/${match.params.id}`, {
                title,
                text,
                autorId
            });
            history.push("/"); // Redireciona após editar
        } catch (error) {
            console.error("Erro ao editar notícia", error);
        }
    };
        return (
        <form onSubmit={handleSubmit}>
            <h2>Editar Notícia</h2>
            <div>
                <label>Título</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Texto</label>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                ></textarea>
            </div>
            <div>
                <label>Autor ID</label>
                <input
                    type="number"
                    value={autorId}
                    onChange={(e) => setAutorId(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Atualizar</button>
        </form>
    );
};

export default EditNews;
