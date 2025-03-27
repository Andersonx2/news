export default function NewsList({ news = [], onDelete }) {
  if (!news.length) {
    return (
      <p className="text-center text-gray-500 mt-4">
        Nenhuma notícia disponível.
      </p>
    ); 
  }

  return (
    <div className="space-y-4">
      {news.map((item) => (
        <div
          key={item.id}
          className="p-4 bg-white shadow rounded-lg flex justify-between items-center"
        >
          <div>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
          <button
            onClick={() => onDelete(item.id)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Excluir
          </button>
        </div>
      ))}
    </div>
  );
}
