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
// import NearEstablishment from './components/listingProperty/NearEstablishment'
import Properties from './components/property/Properties'
import { AuthProvider } from './components/context/AuthProvider'
import SearchProperties from './components/searchProperty/SearchProperties'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property-listing" element={<ListingProperty />}>
            <Route index element={<GetStart />} />
            <Route path="details/:propertyId" element={<ListingDetails />} />
            <Route
              path="amenities/:propertyId"
              element={<ListingAmenities />}
            />
            {/* <Route path="establishments" element={<NearEstablishment />} /> */}
            <Route path="images/:propertyId" element={<ListingImage />} />
            <Route path="review/:propertyId" element={<ReviewListing />} />
          </Route>
          <Route path="/myProperties" element={<Properties />} />
          <Route path="/search" element={<SearchProperties />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
