import ProductList from '../../components/ProductList'
import Game from '../../models/Game'

import residentEvil from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promotions: Game[] = [
  {
    id: 1,
    category: 'Action',
    description:
      'Resident Evil 4, known in Japan as Biohazard 4, is a survival horror and third-person shooter video game.',
    title: 'Resident Evil',
    system: 'Windows',
    infos: ['10%', '$50,00'],
    image: residentEvil
  },
  {
    id: 2,
    category: 'Action',
    description:
      'Resident Evil 4, known in Japan as Biohazard 4, is a survival horror and third-person shooter video game.',
    title: 'Resident Evil',
    system: 'PS5',
    infos: ['5%', '$75,00'],
    image: residentEvil
  },
  {
    id: 3,
    category: 'Action',
    description:
      'Resident Evil 4, known in Japan as Biohazard 4, is a survival horror and third-person shooter video game.',
    title: 'Resident Evil',
    system: 'Windows',
    infos: ['10%', '$50,00'],
    image: residentEvil
  },
  {
    id: 4,
    category: 'Action',
    description:
      'Resident Evil 4, known in Japan as Biohazard 4, is a survival horror and third-person shooter video game.',
    title: 'Resident Evil',
    system: 'Windows',
    infos: ['10%', '$50,00'],
    image: residentEvil
  }
]

const comingSoon: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV is an action RPG developed by Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'Windos',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV is an action RPG developed by Blizzard Entertainment.',
    title: 'Zelda',
    system: 'Windos',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo IV is an action RPG developed by Blizzard Entertainment.',
    title: 'Star Wars',
    system: 'Windos',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo IV is an action RPG developed by Blizzard Entertainment.',
    title: 'Resident Evil 4',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    image: residentEvil
  }
]

const Categories = () => (
  <>
    <ProductList games={promotions} title="RPG" background="gray" />
    <ProductList games={comingSoon} title="Action" background="black" />
    <ProductList games={promotions} title="Aventure" background="gray" />
    <ProductList games={comingSoon} title="FPS" background="black" />
  </>
)

export default Categories
