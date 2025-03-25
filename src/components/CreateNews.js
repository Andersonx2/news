import React, { useState } from "react";
import axios from "axios";

const CreateNews = ({ onNewsCreated }) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [autorId, setAutorId] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/news", {
                title,
                text,
                autorId
            });
            onNewsCreated(response.data);
            setTitle("");
            setText("");
            setAutorId("");
        } catch (error) {
            console.error("Erro ao criar notícia", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Criar Notícia</h2>
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
            <button type="submit">Criar</button>
        </form>
    );
};

export default CreateNews;
