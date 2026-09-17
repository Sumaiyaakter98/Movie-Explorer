import React, { useState } from "react";

const MovieCard = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);

  const removeHtmlTags = (html) => {
    if (!html) return "No description available.";
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const rating = movie.rating?.average || "N/A";
  const image = movie.image?.medium || "https://via.placeholder.com/210x295?text=No+Image";
  const premiered = movie.premiered || "Unknown";

  return (
    <>
      <div className="card bg-white border border-gray-200 shadow-md rounded-xl flex flex-col justify-between h-full p-4">
        <figure className="mb-4">
          <img src={image} alt={movie.name} className="rounded-lg h-64 w-full object-cover" />
        </figure>
        <div className="flex flex-col flex-grow">
          <h2 className="text-lg font-bold text-gray-900 mb-1">{movie.name}</h2>
          <p className="text-sm text-gray-600 mb-4">
            ⭐ {rating} • 📅 {premiered.slice(0, 4)}
          </p>
          <div className="mt-auto">
            <button 
              onClick={() => setIsOpen(true)}
              className="w-full py-2 px-4 bg-primary text-white font-medium rounded-lg hover:bg-primary-focus transition"
            >
              See Details
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black font-bold text-xl"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6 mt-4">
              <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-4 rounded-xl">
                <img 
                  src={movie.image?.original || movie.image?.medium} 
                  alt={movie.name} 
                  className="max-h-72 object-contain rounded-lg" 
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{movie.name}</h3>
                <p className="text-sm text-gray-700 mb-1">
                  <strong>Rating:</strong> ⭐ {rating}
                </p>
                <p className="text-sm text-gray-700 mb-1">
                  <strong>Release:</strong> {premiered}
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Genres:</strong> {movie.genres ? movie.genres.join(", ") : "N/A"}
                </p>
                <div className="text-gray-600 text-xs leading-relaxed border-t pt-2">
                  <p>{removeHtmlTags(movie.summary)}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-right">
              <button 
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;