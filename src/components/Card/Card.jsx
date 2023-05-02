import React from "react";
import Defimg from "../../assets/img/default-image.jpg";

export default function Card({ data }) {
  return (
    <div className="grid grid-flow-row grid-cols-3 gap-4  md:grid-cols-5 lg:grid-cols-7 ">
      {data ? (
        data.results.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-orange-100 border-2 rounded-md shadow-lg shadow-yellow-700 hover:scale-110 duration-300 ease-in"
            >
              {item.poster_path != null ? (
                <img
                  src={"https://image.tmdb.org/t/p/w300/" + item.poster_path}
                  alt={item.title}
                  height={100}
                  width={250}
                />
              ) : (
                <img src={Defimg} alt={item.title} height={100} width={250} />
              )}

              <div className="flex flex-auto justify-between px-2 py-2">
                <h2 className="text-md font-mono">{item.original_title}</h2>
                <p
                  className={`${
                    Math.round(item.vote_average) >= 5
                      ? "bg-green-800"
                      : "bg-red-400"
                  } text-white border-2 rounded-full p-3`}
                >
                  {Math.round(item.vote_average)}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
