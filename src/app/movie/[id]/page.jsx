import Image from "next/image";
async function getMovie() {
  const res = await fetch(
    `https://newal.onrender.com/api`
  );
  return await res.json();
}

export default async function MoviePage(params) {
  const movieId = params;
  const movie = await getMovie();
    console.log(res);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
       
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.description}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.createdAt}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.likes}
          </p>
        </div>
      </div>
    </div>
  );
}
