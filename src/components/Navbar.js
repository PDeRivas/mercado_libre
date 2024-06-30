import CartIcon from "./CartIcon";
import SearchBar from "./SearchBar"

export default function Navbar() {
  return (
    <nav className="bg-naranja-navbar">
      <div className="sm:px-6">
        <div className="relative flex h-16 items-center">
          <div className="flex flex-1 justify-around">
            <a href='/' className="flex items-center">
              <img className="h-8 w-auto" src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.55/mercadolibre/logo_large_25years_v2.png" alt="Your Company" />
            </a>
            <SearchBar />
            <CartIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}