function Register(){

    return(
        <div>
            <h1>Register</h1>
            <form action="">
                <input type="text" id="name" name="name" placeholder="NAME" />
                <input type="text" id="username" name="username" placeholder="USERNAME"/>
                <input type="text" id="email" name="email" placeholder="EMAIL"/>
                <input type="password" id="password" name="password" placeholder="PASSWORD"/>
                <input type="password" id="cPassword" name="cPassword" placeholder="CONFIRM PASSWORD" />
                <button type="submit">REGISTER</button>
            </form>
        </div>
    )
}

export default Register;