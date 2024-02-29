import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import residentEvil from '../../assets/images/resident.png'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="About the game" background="black">
        <p>
          Hogwarts Legacy is an action RPG video game developed by Avalanche
          Software and published by Warner Bros. Interactive Entertainment under
          the Portkey Games label. The game is set in the late 19th century in
          the Harry Potter universe, a century before the events narrated in
          J.K. Rowling&apos;s books. The player controls a student enrolled at
          Hogwarts School of Witchcraft and Wizardry who learns to wield a
          variety of magical skills and objects. With the help of classmates and
          professors, the protagonist embarks on a journey to uncover an ancient
          secret long hidden in the magical world.
        </p>
      </Section>
      <Section title="More details." background="gray">
        <p>
          <b>Plataforma:</b> PlayStation 5 <br />
          <b>Desenvolvedor:</b> Avalanche Software <br />
          <b>Editora:</b> Portkey Games, subsidiária da Warner Bros. Interactive
          Entertainment <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          inglês, espanhol, francês, alemão, italiano, português, entre outros.
          As opções de áudio e legendas podem ser ajustadas nas configurações do
          jogo.
        </p>
      </Section>
      <Gallery defaultCover={residentEvil} name="Game" />
    </>
  )
}

export default Product
