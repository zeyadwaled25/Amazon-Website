import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './authentication/Login/Login'
import Register from './authentication/Register/Register'
import ProductsPage from './products/ProductsPage'
import AuthContextProvider from './Context/AuthContext'
import Cart from './cartPage/cart/Cart'
import Checkout from './cartPage/checkout/Checkout'
import Wishlist from './singelPage/Wishlist/Wishlist'
import ProductDetail from './singelPage/ProductDetail/ProductDetail'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { CartContextProvider } from './Context/CartContext'; // Import CartContextProvider
import { WishlistContextProvider } from './Context/WishlistContext'; // Import WishlistContextProvider
import Allorders from './Allorders/Allorders'

let query = new QueryClient()
function App() {
  return (
    <>
      <AuthContextProvider>
        <QueryClientProvider client={query}>
          <CartContextProvider>
            <WishlistContextProvider> {/* Wrap with WishlistContextProvider */}
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route>
                  <Route path="/" element={<Login />} />
                  <Route path="/home" element={<Home />} />
                 

                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/allorders" element={<Allorders/>} />
                  <Route path="/products/wishlist" element={<Wishlist />} />
                  <Route path="/productdetail/:id/:category" element={<ProductDetail />} />
                </Route>
              </Routes>
            </WishlistContextProvider>
          </CartContextProvider>
          <ReactQueryDevtools />
          <Toaster />
        </QueryClientProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
