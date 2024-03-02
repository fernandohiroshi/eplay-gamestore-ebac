import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categories</SectionTitle>
        <Links>
          <li>
            <Link to="/categories#rpg">RPG</Link>
            <Link to="/categories#action">Action</Link>
            <Link to="/categories#sport">Sports</Link>
            <Link to="/categories#simulation">Simulation</Link>
            <Link to="/categories#fight">Fight</Link>
          </li>
        </Links>
      </FooterSection>

      <FooterSection>
        <SectionTitle>Quick Access</SectionTitle>
        <Links>
          <li>
            <Link to="/#on-sale">Promotions</Link>
            <Link to="/#coming-soon">Coming Soon</Link>
          </li>
        </Links>
      </FooterSection>

      <p>{currentYear} - &copy; E-PLAY All rights reserved.</p>
    </div>
  </Container>
)

export default Footer
