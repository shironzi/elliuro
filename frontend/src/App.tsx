import { Routes, Route, BrowserRouter } from 'react-router'

import './assets/styles/App.css'
import Footer from './components/Footer'
import Home from './components/home/Home'
import Nav from './components/Nav'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import GetStart from './components/listingProperty/GetStart'
import ListingDetails from './components/listingProperty/ListingDetails'
import ListingAmenities from './components/listingProperty/ListingAmenities'
import ListingImage from './components/listingProperty/ListingImages'
import ReviewListing from './components/listingProperty/ReviewListing'
import ListingProperty from './components/listingProperty/ListingProperty'
import NearEstablishment from './components/listingProperty/NearEstablishment'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property-listing" element={<ListingProperty />}>
          <Route index element={<GetStart />} />
          <Route path="details" element={<ListingDetails />} />
          <Route path="amenities" element={<ListingAmenities />} />
          <Route path="establishments" element={<NearEstablishment/>}/>
          <Route path="images" element={<ListingImage />} />
          <Route path="review" element={<ReviewListing />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
