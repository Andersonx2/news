import React from "react";
import NewsForm from "../components/CreateNews";
import NewsList from "../components/NewsList";

function Home() {
  return (
    <div className="mt-">
      <NewsForm />
      <NewsList />
    </div>
  );
}

export default Home;
