
const NavBar = () => {
  return (
    <nav className="flex sticky top-0 bg-gray-800 shadow-md justify-between items-center px-6 py-4">
      <h1 className="text-white text-xl font-bold">LevelMarket</h1>
      
      <form className="">
        <input 
          type="text" 
          id="searchterm" 
          placeholder="Search" 
          className="shadow-sm px-3 py-2 mr-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button 
          type="submit" 
          id="search" 
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Find!
        </button>
      </form>
      
      <ul className="flex space-x-4">
        <li className="text-white">Videogames</li>
        <li className="text-white">Register</li>
      </ul>
    </nav>
  );
};

export default NavBar;

