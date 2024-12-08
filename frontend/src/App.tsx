import { Routes, Route, BrowserRouter } from 'react-router'

import './assets/styles/App.css'
import Footer from './components/Footer'
import Home from './components/home/Home'
import Nav from './components/Nav'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import GetStart from './components/listingProperty/GetStart'
import ListingInputForm from './components/listingProperty/ListingInputForm'
import ListingAmenities from './components/listingProperty/ListingAmenities'
import ListingImageForm from './components/listingProperty/ListingImageForm'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property-listing">
          <Route index element={<GetStart />} />
          <Route path='details' element={<ListingInputForm/>}/>
          <Route path='amenities' element={<ListingAmenities/>}/>
          <Route path='images' element={<ListingImageForm />}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
