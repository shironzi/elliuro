import { useNavigate } from 'react-router'
import { useCallback, useState } from 'react'

import { IoWarningOutline } from 'react-icons/io5'

import { register } from '../../apis/authApi'

function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    cPassword: '',
  })
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      try {
        if (
          !formData.name ||
          !formData.username ||
          !formData.email ||
          !formData.password ||
          !formData.cPassword
        ) {
          setErrorMessage('All fields are required.')
          return
        }

        if (formData.password !== formData.cPassword) {
          setErrorMessage('Passwords do not match.')
          return
        }

        const response = await register(
          formData.name,
          formData.username,
          formData.email,
          formData.password,
          formData.cPassword,
        )

        if (response.error) {
          setErrorMessage(response.message)
          return
        }

        navigate('/login')
      } catch (error) {
        setErrorMessage('Registration failed. Please try again.')
        console.error(error)
      }
    },
    [formData, navigate],
  )

  return (
    <div className="bg-darkGray-400 h-full pb-52">
      <div className="container w-3/12 mx-auto pt-10">
        <h1 className="text-4xl text-center mb-7 tracking-widest">Register</h1>
        <span
          className={
            errorMessage
              ? 'flex flex-row items-center bg-red-100 border border-red-400 text-red-700 px-5 py-2.5 gap-2 my-5 rounded '
              : 'hidden'
          }
        >
          {' '}
          <IoWarningOutline size={25} color="#FF0000 " /> {errorMessage}
        </span>
        <form
          action="Post"
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            id="name"
            name="name"
            placeholder="NAME"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
            className="p-3 font-proximaNova text-base text-primary-400 bg-transparent border border-primary-400 outline-none"
          />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="USERNAME"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
            className="p-3 font-proximaNova text-base text-primary-400 bg-transparent border border-primary-400 outline-none"
          />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="EMAIL"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
            className="p-3 font-proximaNova text-base text-primary-400 bg-transparent border border-primary-400 outline-none"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="PASSWORD"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
            className="p-3 font-proximaNova text-base text-primary-400 bg-transparent border border-primary-400 outline-none"
          />
          <input
            type="password"
            id="cPassword"
            name="cPassword"
            placeholder="CONFIRM PASSWORD"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
            className="p-3 font-proximaNova text-base text-primary-400 bg-transparent border border-primary-400 outline-none"
          />
          <button
            type="submit"
            className="bg-beige-400 p-3 font-proximaNova tracking-widest outline-none transition-colors duration-300 ease-in hover:bg-secondary-400"
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
