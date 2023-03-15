import { NavLink } from "react-router-dom";

export default function NavBar() {
  const activeLink ='text-red-800'
  const normalLink = 'hover:text-red-300'
  return (
    <div>
      <header>
        <nav className="flex border-b-white border-b-2 max-w-[1600px] max-h-32 pr-4 pl-4 pt-6 text-white">

          <div className="flex gap-1 items-end animate-bounce cursor-pointer group hover:text-red-600 ">
          
            <h1 className="text-5xl text-red-600  group-hover:text-white transition-all duration-500">Readler</h1>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
          </div>
          <div className="ml-auto flex gap-8 text-2xl font-bold items-center text-white">
            <NavLink to="/" className= {({isActive}) => isActive ? activeLink : normalLink}>Home</NavLink>
            <NavLink to="/login" className= {({isActive}) => isActive ? activeLink : normalLink}>Login</NavLink>
            <NavLink to="/signup" className= {({isActive}) => isActive ? activeLink : normalLink}>Register</NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
}
