import './assets/styles/App.css'
import Footer from './components/Footer'
// import Home from './components/home/Home'
import Nav from './components/Nav'
import Login from './components/auth/Login'

function App() {
  return (
    <>
      <Nav />
      {/* <Home /> */}
      <Login />
      <Footer />
    </>
  )
}

export default App
