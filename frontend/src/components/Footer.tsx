import { MdEmail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa'
import { FaRegCopyright } from 'react-icons/fa'

function Footer() {
  return (
    <div className="bg-secondary-400 pt-12 pb-6">
      <div className="container mx-auto">
        <div className="pb-7 border-b border-beige-400 mb-16">
          <h1 className="w-fit tracking-widest cursor-pointer font-explore text-3xl hover:text-beige-400 transition-all duration-300 ease-linear">
            Elliuro
          </h1>
        </div>
        <div className="container flex justify-between mx-auto px-16">
          <div className="flex flex-col gap-4">
            <h1 className="font-proximaNova text-lg tracking-widest">
              KEY LOCATION
            </h1>
            <ul className="flex flex-col gap-2">
              <li>Manila</li>
              <li>Quezon City</li>
              <li>Tagaytay</li>
              <li>Ayala Alabang</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-proximaNova text-lg tracking-widest">
              INFORMATION
            </h1>
            <ul className="flex flex-col gap-2">
              <li>About</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-proximaNova text-lg tracking-widest">
              GET IN TOUCH
            </h1>
            <ul className="flex flex-col gap-2">
              <li className="flex flex-row gap-4 items-center">
                <MdEmail color="#ffffff" /> elliuro@gmail.com
              </li>
              <li className="flex flex-row gap-4 items-center">
                <FaPhone color="#ffffff" />
                0927643398
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center mt-10">
          <FaRegCopyright />
          <p className="text-center tracking-widest text-xs ">
            {' '}
            Copyright 2024 Elliuro Properties
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
