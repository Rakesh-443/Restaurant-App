import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'

const Header = () => (
  <div className="header-main-container">
    <div className="header-flex-container">
      <h1 className="logo-heading">UNI Resto Cafe</h1>
      <div className="cart-view">
        <span className="my-orders">My Orders</span>
        <AiOutlineShoppingCart className="cart-logo" />
      </div>
    </div>
  </div>
)

export default Header
