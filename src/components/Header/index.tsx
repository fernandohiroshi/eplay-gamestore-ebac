import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/cart.svg'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Menu onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Menu>
          <Link to="/">
            <h1>
              {/* <img src={logo} alt="EPLAY" /> */}
              EPLAY
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  title="Clique aqui para acessar a pagina de categorias"
                  to="categories"
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seçao de em breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seçao de promocoes"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton role="button" onClick={openCart}>
          {items.length}
          <span> - Produto(s)</span>
          <img src={cartIcon} alt="cart" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              title="Clique aqui para acessar a pagina de categorias"
              to="categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar a seçao de em breve"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar a seçao de promocoes"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoçoes
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
