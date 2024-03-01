import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkItem, CartButton } from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />{' '}
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="categories">Categories</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">News</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promotions</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        {items.length} - Products(s)
        <img src={cart} alt="cart" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
