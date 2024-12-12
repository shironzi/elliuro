import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router'
import { login } from '../../apis/authApi'
import { useAuth } from './AuthContext'

function Login() {
  const navigate = useNavigate()
  const { setIsAuthenticated } = useAuth()

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      try {
        if (!formData.username || !formData.password) {
          setErrorMessage('All fields are required.')
        }

        const res = await login(formData.username, formData.password)
        if (res.error) {
          setErrorMessage(res.message)
          return
        }

        setIsAuthenticated(true)
        navigate('/')
      } catch (error) {
        setErrorMessage('Logged in failed. Please try later.')
        console.error(error)
      }
    },
    [navigate, formData, setIsAuthenticated],
  )

  return (
    <div className=" bg-darkGray-400 h-full pb-52">
      <div className="container w-3/12 mx-auto pt-10">
        <h1 className="text-4xl text-center mb-7 tracking-widest">Login</h1>
        <span
          className={
            errorMessage
              ? 'flex flex-row items-center bg-red-100 border border-red-400 text-red-700 px-5 py-2.5 gap-2 my-5 rounded '
              : 'hidden'
          }
        >
          {errorMessage}
        </span>
        <form
          action="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            id="username"
            name="username"
            placeholder="USERNAME"
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.currentTarget.id]: e.currentTarget.value,
              })
            }
            className="p-3 font-proximaNova text-base text-primary-400 bg-transparent border border-primary-400 outline-none"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="PASSWORD"
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.currentTarget.id]: e.currentTarget.value,
              })
            }
            className="p-3 font-proximaNova text-base text-primary-400 bg-transparent border border-primary-400 outline-none"
          />
          <button
            type="submit"
            className="bg-beige-400 p-3 font-proximaNova tracking-widest outline-none transition-colors duration-300 ease-in hover:bg-secondary-400"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
