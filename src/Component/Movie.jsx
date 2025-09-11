import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Movie = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ loading state
  const API =
    'https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1';

  const movies = async () => {
    try {
      setLoading(true); // start loading
      const res = await axios.get(API);
      console.log(res);
      setData(res.data.Search);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // stop loading
    }
  };

  useEffect(() => {
    movies();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-5">🎬 Movies List</h1>

      {loading ? (
        // ✅ Loader UI
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        // ✅ Movies UI
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={item.Poster}
                alt={item.Title}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.Title}</h2>
                <p className="text-gray-500">Year: {item.Year}</p>
                <p className="text-gray-500">Type: {item.Type}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movie;
