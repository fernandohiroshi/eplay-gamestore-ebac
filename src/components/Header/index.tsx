import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  Menu,
  HeaderRow,
  NavMobile
} from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Menu onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Menu>
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
          {items.length}
          <span> - Products(s)</span>
          <img src={cart} alt="cart" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
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
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
