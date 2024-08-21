import React, { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const MoviesPage = () => {
  const [movies, setmovies] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    let response = await fetch("https://hoblist.com/api/movieList", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      }),
    });

    if (response.ok) {
      const data = await response.json();
      setmovies(data.result);
      setloading(false);
    }
  };

  return (
    <div>
      <div className="mt-24 space-y-4">
        {loading ? (
          <>
            <div className="flex mt-[200px]  justify-center">
              <PulseLoader color="#49dc28" size={18} />
            </div>
          </>
        ) : (
          <>
            {movies.map((ele, i) => {
              const { voting, poster, genre, director, title, stars } = ele;
              return (
                <React.Fragment key={i}>
                  <div
                    className="grid grid-cols-3 space-y-2 gap-4 w-[55vw] mx-auto"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                    }}
                  >
                    {/* votes */}
                    <div className="flex flex-col justify-evenly items-center">
                      <i className="bi bi-arrow-up-circle-fill text-[50px]"></i>
                      <p>{voting}</p>
                      <i className="bi bi-arrow-down-circle-fill text-[50px]"></i>
                      <p className="font-bold text-xl">votes</p>
                    </div>
                    {/* poster */}
                    <div className="flex justify-center items-center">
                      <img
                        src={poster}
                        alt=""
                        className="w-full h-[300px] object-cover"
                      />
                    </div>
                    {/* movie data */}
                    <div className="space-y-6 flex  flex-wrap w-full">
                      <p className="text-2xl font-bold w-full">{title}</p>
                      <p className="text-xl font-semibold w-full ">Genre: {genre}</p>
                      <p className="text-xl font-semibold">
                        Director: {director}
                      </p>
                      <p className="font-semibold w-full flex flex-wrap overflow-hidden">
                        {stars.map((star, index) => {
                          return (
                            <>Stars: {star}</>
                            // <p key={index}>
                            // </p>
                          );
                        })}
                      </p>
                    </div>
                    <div className="text-center mx-2 rounded-md p-2 bg-sky-500 col-span-3 text-white font-bold cursor-pointer">
                      Watch Trailer
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
