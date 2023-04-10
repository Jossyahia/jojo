import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";
    //const results.id = results._id;

export default function Card({ result }) {

  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result._id}`}>
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.title}</p>
          <h2 className="truncate text-lg font-bold">{result.description}</h2>
          <p className="flex items-center">
            {result.createdAt}
            <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.likes}
          </p>
        </div>
      </Link>
    </div>
  );
}
