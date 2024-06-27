import CartIcon from "./CartIcon";
import SearchBar from "./SearchBar"

export default function Navbar() {
  return (
    <nav class="bg-naranja-navbar">
      <div class="sm:px-6">
        <div class="relative flex h-16 items-center">
          <div class="flex flex-1 justify-around">
            <a href='/' class="flex items-center">
              <img class="h-8 w-auto" src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.55/mercadolibre/logo_large_25years_v2.png" alt="Your Company" />
            </a>
            <SearchBar/>
            <CartIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}