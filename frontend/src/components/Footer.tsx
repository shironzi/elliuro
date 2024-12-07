import { MdEmail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa'

function Footer() {
  return (
    <div className="bg-secondary-400">
      <div className="container mx-auto">
        <h1 className="mx-auto">ELLIURO</h1>
        <div className="container flex justify-between mx-auto">
          <div>
            <h1>KEY LOCATION</h1>
            <ul>
              <li>Manila</li>
              <li>Quezon City</li>
              <li>Tagaytay</li>
              <li>Ayala Alabang</li>
            </ul>
          </div>
          <div>
            <h1>INFORMATION</h1>
            <ul>
              <li>About</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
          <div>
            <h1>GET IN TOUCH</h1>
            <ul>
              <li>
                <MdEmail color="#ffffff" /> elliuro@gmail.com
              </li>
              <li>
                <FaPhone color="#ffffff" />
                0927643398
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
