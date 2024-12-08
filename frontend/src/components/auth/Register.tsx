function Register() {
  return (
    <div className="bg-darkGray-400 h-full pb-52">
      <div className="container w-3/12 mx-auto pt-10">
        <h1>Register</h1>
        <form action="">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="NAME"
            className="p-3 font-proximaNova text-base text-primary-400 bg-transparent border border-primary-400 outline-none"
          />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="USERNAME"
            className="p-3 font-proximaNova text-base text-primary-400 bg-transparent border border-primary-400 outline-none"
          />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="EMAIL"
            className="p-3 font-proximaNova text-base text-primary-400 bg-transparent border border-primary-400 outline-none"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="PASSWORD"
            className="p-3 font-proximaNova text-base text-primary-400 bg-transparent border border-primary-400 outline-none"
          />
          <input
            type="password"
            id="cPassword"
            name="cPassword"
            placeholder="CONFIRM PASSWORD"
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
