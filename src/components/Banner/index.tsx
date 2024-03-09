import Tag from '../Tag'
import Button from '../Button'

import { parseToBRL } from '../../utils'
import { useGetFeaturedGameQuery } from '../../services/api'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <S.BannerBox style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
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
