import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-gray-700 text-yellow-500">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-sans">LOGO</div>

        {/* DEKSTOP MENU */}
          <ul className="hidden text-xl md:flex space-x-6 font-sans">
            <li>
              <Link to="/" className="hover:text-white">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/client" className="hover:text-white">
                CLIENT
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar