import { useRouter } from "next/dist/client/router";
import requests from "../Utilities/requests";
const Nav = (props) => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 text-2xl overflow-x-scroll scrollbar-hide  ">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2
              key={key}
              onClick={() => router.push(`/?genre=${key}`)}
              className="cursor-pointer transition duration-100 trnasform hover:scale-125 hover:text-white active:text-red-500 last:pr-20"
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className="absolute right-0 top-0 bg-gradient-to-l from-[#06202A] h-4 w-1/12"></div>
    </nav>
  );
};

export default Nav;
