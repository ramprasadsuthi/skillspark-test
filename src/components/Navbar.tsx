import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/mx-logo.jpg";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[rgba(11,19,43,0.8)] backdrop-blur-md text-white shadow-md"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="w-11 h-11 bg-white p-1 rounded-full flex items-center justify-center shadow-sm">
            <img 
              src={logo} 
              alt="MX Infotech Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <span className="font-display font-semibold text-xl tracking-tight text-white">
            MX Talent-Test
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="/select"
            className="text-sm font-medium text-white hover:text-gray-200 transition-colors"
          >
            Take Test
          </Link>
          <Link
            to="/admin"
            className="text-sm font-medium text-white hover:text-gray-200 transition-colors"
          >
            Admin
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
