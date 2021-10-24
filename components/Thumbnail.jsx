import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";
const Thumbnail = forwardRef(({ result }, ref) => {
  console.log(result);
  const base_url = "https://image.tmdb.org/t/p/w500";
  return (
    <div
      ref={ref}
      className="p-2 cursor-pointer group trnsition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        src={
          `${base_url}${result.backdrop_path || result.poster_path}` ||
          `${base_url}${result.poster_path}`
        }
        width={1920}
        height={1080}
      />
      <div className="p-2">
        <p className="truncate max-w-md ">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out">
          {result.media_type && `${result.media_type} .`}{" "}
          {result.first_air_date || result.release_date} .
          <ThumbUpIcon className="h-5 m-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
