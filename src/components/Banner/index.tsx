import { BannerBox, Title, Price } from './styles'
import heroImg from '../../assets/images/spider_man.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <BannerBox style={{ backgroundImage: `url(${heroImg})` }}>
    <div className="container">
      <Tag size="big">Top Pick Today</Tag>
      <div>
        <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
        <Price>
          From <span>$50.00</span> <br /> for only $19.98
        </Price>
      </div>
      <Button type="link" to="/product" title="Click to view offer">
        To enjoy
      </Button>
    </div>
  </BannerBox>
)

export default Banner
