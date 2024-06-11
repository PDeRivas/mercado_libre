import Combo from "./ComboBox"
import SearchBar from "./SearchBar";
export default function Navbar() {
  return (
    <nav class="bg-naranja-navbar">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <a href='/' class="flex flex-shrink-0 items-center">
              <img class="h-8 w-auto" src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.55/mercadolibre/logo_large_25years_v2.png" alt="Your Company" />
            </a>
            <Combo/>
          </div>
        </div>
      </div>
    </nav>

  );
}