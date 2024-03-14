import Loader from '../Loader'
import Button from '../Button'

import { parseToBRL } from '../../utils'
import { useGetFeaturedGameQuery } from '../../services/api'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.BannerBox style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Price>
            De <span>{parseToBRL(game.prices.old)}</span> <br /> Por apenas{' '}
            {parseToBRL(game.prices.current)}
          </S.Price>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.BannerBox>
  )
}

export default Banner
