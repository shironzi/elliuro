import { useState } from "react"


function Register() {

  const [formData, setFormData] = useState(
    {
      name: "",
      username: "",
      email: "",
      password: "",
      cPassword: "",
    }
  )


  return (
    <div className="bg-darkGray-400 h-full pb-52">
      <div className="container w-3/12 mx-auto pt-10">
        <h1 className="text-4xl text-center mb-7 tracking-widest">Register</h1>
        <form action="" className="flex flex-col gap-5">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="NAME"
            onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
            className="p-3 font-proximaNova text-base text-primary-400 bg-transparent border border-primary-400 outline-none"
          />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="USERNAME"
            onChange={(e) => setFormData({...formData, [e.target.id]: e.target.value})}
            className="p-3 font-proximaNova text-base text-primary-400 bg-transparent border border-primary-400 outline-none"
          />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="EMAIL"
            onChange={(e) => setFormData({...formData, [e.target.id]: e.target.value})}
            className="p-3 font-proximaNova text-base text-primary-400 bg-transparent border border-primary-400 outline-none"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="PASSWORD"
            onChange={(e) => setFormData({...formData, [e.target.id]: e.target.value})}
            className="p-3 font-proximaNova text-base text-primary-400 bg-transparent border border-primary-400 outline-none"
          />
          <input
            type="password"
            id="cPassword"
            name="cPassword"
            placeholder="CONFIRM PASSWORD"
            onChange={(e) => setFormData({...formData, [e.target.id]: e.target.value})}
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
