import Cart from "./assets/Cart";
import User from "./assets/User";
import Game from "./assets/Game";
import Search from "./assets/Search";
const NavBar = () => {
  return (
    <nav className="flex sticky top-0 bg-slate-50 shadow-md justify-between items-center px-6 py-4">
      <h1 className="text-black text-xl font-bold">LevelMarket</h1>

      <form className="">
        <input
          type="text"
          id="searchterm"
          placeholder="Search"
          className="shadow-sm px-3 py-2 mr-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          type="button"
          className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-3 
          text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 
          ransition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2
        focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0
        active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none
        dark:shadow-black/30 dark:hover:shadow-dark-strong 
          dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
          <Search/>
        </button>
      </form>
      <ul className="flex space-x-4 align-middle">
        <li className="text-black align-middle">
        <a href=""><Game></Game></a>
        </li>
        <li className="text-black">
          <a href=""><Cart></Cart></a>
        </li>
        <li className="text-black">
        <a href=""><User></User></a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
