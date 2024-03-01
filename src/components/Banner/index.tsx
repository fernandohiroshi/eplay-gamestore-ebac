import { useEffect, useState } from 'react'
import { BannerBox, Title, Price } from './styles'
import heroImg from '../../assets/images/spider_man.png'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { priceFormat } from '../ProductList'
import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Loading...</h3>
  }
  // 24:24
  return (
    <BannerBox style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Top Pick Today</Tag>
        <div>
          <Title>{game.name}</Title>
          <Price>
            From <span>{priceFormat(game.prices.old)}</span> <br /> for only{' '}
            {priceFormat(game.prices.current)}
          </Price>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Click to view offer"
        >
          To enjoy
        </Button>
      </div>
    </BannerBox>
  )
}

export default Banner
