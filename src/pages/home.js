import React from "react";
import NewsList from "../app/NewsList";
import NewsForm from "../app/CreateNews";
function Home({ news, setNews, onDelete }) {
  return (
    <div>
      <NewsForm setNews={setNews} />
      <NewsList
        news={news}
        setNews={setNews}
        onDelete={onDelete}
      />
    </div>
  );
}

export default Home;
