import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'

const Header = () => (
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
    <LinkCart href="#">
      0 - Products(s)
      <img src={cart} alt="cart" />
    </LinkCart>
  </HeaderBar>
)

export default Header
