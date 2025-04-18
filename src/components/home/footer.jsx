
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-black bg-cover bg-center  text-gray-300 py-12 px-4 ">
      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
       
        <div>
          <div className="flex space-x-2 mb-4">
          <img
            src="/images/logo.png"
            alt="logo"
            className="lg:w-[10rem]   "
          />
         
          </div>
          <p className="text-sm mb-4">
          We are in the business of the most invaluable output a human has ever produced. 
          </p>
          <div className="flex space-x-4 text-xl ">
            <BsTwitterX className="hover:text-red-500 cursor-pointer" />
            <FaFacebookF className="hover:text-red-500 cursor-pointer" />
            <FaPinterestP className="hover:text-red-500 cursor-pointer" />
            <FaInstagram className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>

        {/* Links */}
        <div className="mt-10">
          <h3 className="text-white font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Meet Our Team</a></li>
            <li><a href="#">Our Portfolio</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="mt-10">
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm mb-2">86 Road Broklyn Street, 600<br />New York, USA</p>
          <p className="flex items-center gap-2 text-sm mb-2">
            <MdEmail className="text-red-500  text-[16px]"/> needhelp@company.com
          </p>
          <p className="flex items-center gap-2 text-sm">
            <MdPhone className="text-red-500 text-[18px]" /> 92 666 888 0000
          </p>
        </div>

        {/* Newsletter */}
        <div className="mt-10">
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">Subscribe to Our Newsletter for Daily<br />News and Updates</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 text-sm text-black bg-white"
            />
            <button type="submit" className="bg-red-500 text-white px-4 py-2 text-sm font-bold">
              SEND
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}
