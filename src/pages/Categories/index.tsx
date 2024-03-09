import ProductList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && sportGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ProductList
          games={actionGames}
          title="Acao"
          background="black"
          id="action"
        />
        <ProductList
          games={sportGames}
          title="Esportes"
          background="gray"
          id="sport"
        />
        <ProductList
          games={fightGames}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductList games={rpgGames} title="RPG" background="gray" id="rpg" />
        <ProductList
          games={simulationGames}
          title="Simulaçao"
          background="black"
          id="simulation"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
