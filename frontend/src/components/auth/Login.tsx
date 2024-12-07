function Login(){
    
    return(
        <div>
            <h1>Login</h1>
            <form action="">
                <input type="text" id="username" name="username" placeholder="USERNAME" />
                <input type="password" id="password" name="password" placeholder="PASSOWRD" />
                <button type="submit">LOGIN</button>
            </form>
        </div>
    )
}

export default Login;