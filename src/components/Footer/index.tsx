import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categories</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </Link>

            <Link
              title="Clique aqui para acessar jogos de acao"
              to="/categories#action"
            >
              Action
            </Link>
            <Link
              title="Clique aqui para acessar jogos de esportes"
              to="/categories#sport"
            >
              Sports
            </Link>
            <Link
              title="Clique aqui para acessar jogos de simulaçao"
              to="/categories#simulation"
            >
              Simulation
            </Link>
            <Link
              title="Clique aqui para acessar jogos de luta"
              to="/categories#fight"
            >
              Fight
            </Link>
          </li>
        </Links>
      </FooterSection>

      <FooterSection>
        <SectionTitle>Quick Access</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar a seçao de promocoes"
              to="/#on-sale"
            >
              Promocoes
            </Link>
            <Link
              title="Clique aqui para acessar a seçao em breve"
              to="/#coming-soon"
            >
              Em breve
            </Link>
          </li>
        </Links>
      </FooterSection>

      <p>{currentYear} - &copy; E-PLAY All rights reserved.</p>
    </div>
  </Container>
)

export default Footer
