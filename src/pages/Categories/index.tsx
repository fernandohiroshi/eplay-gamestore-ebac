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
        <ProductList games={actionGames} title="Action" background="black" />
        <ProductList games={sportGames} title="Sport" background="gray" />
        <ProductList games={fightGames} title="Fighting" background="black" />
        <ProductList games={rpgGames} title="RPG" background="gray" />
        <ProductList
          games={simulationGames}
          title="Simulation"
          background="black"
        />
      </>
    )
  }
  return <h4>Loading...</h4>
}

export default Categories
