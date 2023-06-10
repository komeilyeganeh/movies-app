import { FC } from "react";

const Navbar: FC = () => {

  // ********** Return JSX **********
  return (
    <nav>
      <ul className="flex items-center gap-x-8">
        <li className="relative group">
          <a
            href="javascript:;"
            className="uppercase text-lg text-white inline-block py-6"
          >
            movies
          </a>
          <ul className="absolute top-[120%] opacity-0 invisible left-0 w-40 bg-white ease-out duration-200 rounded-xl p-2 flex flex-col gap-y-2 group-hover:visible group-hover:top-full group-hover:opacity-100">
            <li>
              <a
                href="#"
                className="uppercase block p-2 ease-out duration-200 border-l-2 border-transparent text-dark hover:border-red-400 hover:text-red-400"
              >
                popular
              </a>
            </li>
            <li>
              <a
                href="#"
                className="uppercase block p-2 ease-out duration-200 border-l-2 border-transparent text-dark hover:border-red-400 hover:text-red-400"
              >
                new playing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="uppercase block p-2 ease-out duration-200 border-l-2 border-transparent text-dark hover:border-red-400 hover:text-red-400"
              >
                up coming
              </a>
            </li>
            <li>
              <a
                href="#"
                className="uppercase block p-2 ease-out duration-200 border-l-2 border-transparent text-dark hover:border-red-400 hover:text-red-400"
              >
                top rated
              </a>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <a
            href="javascript:;"
            className="uppercase text-lg text-white inline-block py-6"
          >
            tv shoes
          </a>
          <ul className="absolute top-[120%] opacity-0 invisible left-0 w-40 bg-white ease-out duration-200 rounded-xl p-2 flex flex-col gap-y-2 group-hover:visible group-hover:top-full group-hover:opacity-100">
            <li>
              <a
                href="#"
                className="uppercase block p-2 ease-out duration-200 border-l-2 border-transparent text-dark hover:border-red-400 hover:text-red-400"
              >
                popular
              </a>
            </li>
            <li>
              <a
                href="#"
                className="uppercase block p-2 ease-out duration-200 border-l-2 border-transparent text-dark hover:border-red-400 hover:text-red-400"
              >
                airing today
              </a>
            </li>
            <li>
              <a
                href="#"
                className="uppercase block p-2 ease-out duration-200 border-l-2 border-transparent text-dark hover:border-red-400 hover:text-red-400"
              >
                on tv
              </a>
            </li>
            <li>
              <a
                href="#"
                className="uppercase block p-2 ease-out duration-200 border-l-2 border-transparent text-dark hover:border-red-400 hover:text-red-400"
              >
                top rated
              </a>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <a
            href="javascript:;"
            className="uppercase text-lg text-white inline-block py-6"
          >
            more
          </a>
          <ul className="absolute top-[120%] opacity-0 invisible left-0 w-40 bg-white ease-out duration-200 rounded-xl p-2 flex flex-col gap-y-2 group-hover:visible group-hover:top-full group-hover:opacity-100">
            <li>
              <a
                href="#"
                className="uppercase block p-2 ease-out duration-200 border-l-2 border-transparent text-dark hover:border-red-400 hover:text-red-400"
              >
                discussions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="uppercase block p-2 ease-out duration-200 border-l-2 border-transparent text-dark hover:border-red-400 hover:text-red-400"
              >
                leaderboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="uppercase block p-2 ease-out duration-200 border-l-2 border-transparent text-dark hover:border-red-400 hover:text-red-400"
              >
                support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="uppercase block p-2 ease-out duration-200 border-l-2 border-transparent text-dark hover:border-red-400 hover:text-red-400"
              >
                api
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
