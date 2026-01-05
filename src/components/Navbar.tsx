import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

type searchProp = {
  onSearch:(value: string)=>void
}

export default function Navbar({onSearch}:searchProp) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-400 shadow-md px-4 md:px-8">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        
        <div className="text-xl font-bold tracking-wide">
        <Link to={"/product"} > Ultimo Shop</Link> 
        </div>

        <div className="hidden md:flex flex-1 justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              onChange={(e)=>onSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full px-4 py-2 text-sm 
              bg-gray-200 text-slate-700
              border border-slate-300
              focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              <FaSearch />
            </span>
          </div>
        </div>

      
        <div className="flex items-center gap-3">
          <button className="hidden md:block px-4 py-2 rounded-lg border border-slate-300 text-sm text-slate-700 hover:bg-slate-100">
            Login
          </button>

          <button className="hidden md:block px-4 py-2 rounded-lg bg-orange-500 text-white text-sm hover:bg-orange-600">
            Sign Up
          </button>
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setIsOpen(prev => !prev)}
          >
            <span className="w-6 h-0.5 bg-slate-800"></span>
            <span className="w-6 h-0.5 bg-slate-800"></span>
            <span className="w-6 h-0.5 bg-slate-800"></span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-400 border-t border-slate-200">
          <div className="p-4 space-y-4">
            
  
            <input
              type="text"
              placeholder="Search products..."
              onChange={(e)=>onSearch(e.target.value)}
              className="w-full rounded-lg px-4 py-2 text-sm 
              bg-gray-200 text-slate-700
              border border-slate-300"
            />

            <button className="w-full px-4 py-2 rounded-lg border border-slate-300 text-slate-700">
              Login
            </button>

            <button className="w-full px-4 py-2 rounded-lg bg-orange-500 text-white">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
