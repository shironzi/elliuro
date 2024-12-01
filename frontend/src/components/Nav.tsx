import { IoPersonCircleOutline } from 'react-icons/io5'
import { FaHeart } from 'react-icons/fa'

function Nav() {
  const isAuthenticated = localStorage.getItem('token')

  return (
    <nav className="flex justify-between mx-auto items-center p-6 bg-darkGray-400 w-full transition-shadow shadow-md top-0 sticky z-10 -m-11">
      <div>
        <h1 className="tracking-widest cursor-pointer font-explore text-3xl hover:text-beige-400 transition-all duration-300 ease-linear">
          Elliuro
        </h1>
      </div>
      <div className="flex justify-between flex-row gap-x-14 items-center width box-border">
        {isAuthenticated ? (
          <>
            <a
              className="tracking-widest border-b-2 border-transparent transition-all duration-300 ease-linear hover:text-beige-400 hover:border-beige-400 hover:border-opacity-100"
              href=""
            >
              EXPLORE PROPERTIES
            </a>
            <a
              className="tracking-widest border-b-2 border-transparent transition-all duration-300 ease-linear hover:text-beige-400 hover:border-beige-400 hover:border-opacity-100"
              href=""
            >
              LIST PROPERTIES
            </a>
            <a href="">
              <FaHeart size={24} />
            </a>
            <a href="">
              <IoPersonCircleOutline size={30} />
            </a>
          </>
        ) : (
          <>
            <a
              className="tracking-widest border-b-2 border-transparent transition-all duration-300 ease-linear hover:text-beige-400 hover:border-beige-400 hover:border-opacity-100"
              href=""
            >
              EXPLORE PROPERTIES
            </a>
            <a
              className="tracking-widest px-7 py-2.5 bg-beige-400 hover:bg-secondary-400 transition-all duration-300 ease-linear"
              href=""
            >
              LOGIN
            </a>
            <a
              className="tracking-widest px-7 py-2.5 bg-beige-400 hover:bg-secondary-400 transition-all duration-300 ease-linear"
              href=""
            >
              SIGNUP
            </a>
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav
