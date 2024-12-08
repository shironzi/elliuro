import { IoPersonCircleOutline } from 'react-icons/io5'
import { FaHeart } from 'react-icons/fa'
import { Link } from "react-router";

function Nav() {
  const isAuthenticated = localStorage.getItem('token')

  return (
    <nav className="flex justify-between mx-auto items-center p-6 bg-darkGray-400 w-full transition-shadow shadow-md top-0 sticky z-50">
      <div>
        <Link to="/" className="tracking-widest cursor-pointer font-explore text-3xl hover:text-beige-400 transition-all duration-300 ease-linear">
          Elliuro
        </Link>
      </div>
      <div className="flex justify-between flex-row gap-x-14 items-center width box-border">
        {isAuthenticated ? (
          <>
            <Link
              className="tracking-widest border-b-2 border-transparent transition-all duration-300 ease-linear hover:text-beige-400 hover:border-beige-400 hover:border-opacity-100"
              to=""
            >
              EXPLORE PROPERTIES
            </Link>
            <Link
              className="tracking-widest border-b-2 border-transparent transition-all duration-300 ease-linear hover:text-beige-400 hover:border-beige-400 hover:border-opacity-100"
              to=""
            >
              LIST PROPERTIES
            </Link>
            <Link to="">
              <FaHeart size={24} />
            </Link>
            <Link to="">
              <IoPersonCircleOutline size={30} />
            </Link>
          </>
        ) : (
          <>
            <Link
              className="tracking-widest border-b-2 border-transparent transition-all duration-300 ease-linear hover:text-beige-400 hover:border-beige-400 hover:border-opacity-100"
              to=""
            >
              EXPLORE PROPERTIES
            </Link>
            <Link
              className="tracking-widest px-7 py-2.5 bg-beige-400 hover:bg-secondary-400 transition-all duration-300 ease-linear"
              to="/login"
            >
              LOGIN
            </Link>
            <Link
              className="tracking-widest px-7 py-2.5 bg-beige-400 hover:bg-secondary-400 transition-all duration-300 ease-linear"
              to="/register"
            >
              SIGNUP
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav
