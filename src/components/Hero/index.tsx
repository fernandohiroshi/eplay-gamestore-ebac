import { priceFormat } from '../ProductList'
import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {priceFormat(game.prices.old)}</span>
            )}
            {game.prices.current && <>{priceFormat(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Click here to add this game to the cart"
              variant="primary"
              onClick={addToCart}
            >
              Add to cart
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
