import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span> From $50.00</span>
          For just $19.00
        </p>
        <Button
          type="button"
          title="Click here to add this game to the cart"
          variant="primary"
        >
          Add to cart
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
