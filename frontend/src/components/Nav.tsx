import { IoPersonCircleOutline } from 'react-icons/io5'
import { MdLogout } from 'react-icons/md'
import { IoMdSettings } from 'react-icons/io'
import { IoMdPerson } from 'react-icons/io'
import { FaHouse } from 'react-icons/fa6'

import { FaHeart } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'
import { useCallback, useState } from 'react'
import { logout } from '../apis/authApi'
import { useAuth } from './context/useAuth'

function Nav() {
  const navigate = useNavigate()
  const { isAuthenticated, setIsAuthenticated } = useAuth()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = useCallback(() => {
    setDropdownOpen(!dropdownOpen)
  }, [dropdownOpen])

  const handleLogout = useCallback(async () => {
    await logout()

    setDropdownOpen(false)
    setIsAuthenticated(false)
    navigate('/login')
  }, [navigate, setIsAuthenticated])

  return (
    <nav className="bg-darkGray-400 shadow-md top-0 sticky z-50">
      <div className="container flex justify-between mx-auto items-center p-6 transition-shadow ">
        <div>
          <Link
            to="/"
            className="tracking-widest cursor-pointer font-explore text-3xl hover:text-beige-400 transition-all duration-300 ease-linear"
          >
            Elliuro
          </Link>
        </div>
        <div className="flex justify-between flex-row gap-x-14 items-center width box-border">
          {isAuthenticated ? (
            <>
              <Link
                className="tracking-widest border-b-2 border-transparent transition-all duration-300 ease-linear hover:text-beige-400 hover:border-beige-400 hover:border-opacity-100"
                to="/explore"
              >
                EXPLORE PROPERTIES
              </Link>
              <Link
                className="tracking-widest border-b-2 border-transparent transition-all duration-300 ease-linear hover:text-beige-400 hover:border-beige-400 hover:border-opacity-100"
                to="/property-listing"
              >
                LIST PROPERTIES
              </Link>
              <Link to="">
                <FaHeart size={24} />
              </Link>
              <div className="relative inline-block text-left">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center focus:outline-none"
                >
                  <IoPersonCircleOutline size={30} />
                </button>
                {dropdownOpen && (
                  <div className="absolute text-sm right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg">
                    <Link
                      to="/profile"
                      className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex flex-row gap-5 items-center"
                    >
                      <IoMdPerson size={20} />
                      Profile
                    </Link>
                    <Link
                      to="/myProperties"
                      className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex flex-row gap-5 items-center"
                    >
                      <FaHouse size={20} />
                      My Properties
                    </Link>
                    <Link
                      to="/settings"
                      className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex flex-row gap-5 items-center"
                    >
                      <IoMdSettings size={20} />
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex flex-row gap-5 items-center"
                    >
                      <MdLogout size={20} color="#ff0000" /> Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                className="tracking-widest border-b-2 border-transparent transition-all duration-300 ease-linear hover:text-beige-400 hover:border-beige-400 hover:border-opacity-100"
                to="/explore"
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
      </div>
    </nav>
  )
}

export default Nav
