export default function LoadingButton({ onClick, isLoading, children }) {
  return (
    <button
      type="submit"
      className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold  hover:bg-blue-700 transition flex justify-center items-center gap-2"
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading && (
        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
      )}
      {children}
    </button>
  );
}
