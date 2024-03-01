import Button from '../Button'
import {
  CartContainer,
  Overlay,
  SideBar,
  Prices,
  Quantity,
  CartItem
} from './styles'

import starWars from '../../assets/images/star_wars.png'
import Tag from '../Tag'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <SideBar>
      <ul>
        <CartItem>
          <img src={starWars} />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>Rpg</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={starWars} />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>Rpg</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
            <button type="button" />
          </div>
        </CartItem>
      </ul>
      <Quantity>2 Jogos no carrinho</Quantity>
      <Prices>
        Total R$ 250,00 <span>Em até 6x sem juros</span>
      </Prices>
      <Button title="Clique aqui para continuar com a compra" type="button">
        Continuar com a compra
      </Button>
    </SideBar>
  </CartContainer>
)

export default Cart
