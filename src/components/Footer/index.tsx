import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categories</SectionTitle>
        <Links>
          <li>
            <Link>RPG</Link>
            <Link>Action</Link>
            <Link>Aventure</Link>
            <Link>Sports</Link>
            <Link>Simulation</Link>
            <Link>Strategy</Link>
            <Link>FPS</Link>
          </li>
        </Links>
      </FooterSection>

      <FooterSection>
        <SectionTitle>Quick Access</SectionTitle>
        <Links>
          <li>
            <Link>News</Link>
            <Link>Promotions</Link>
            <Link>Coming Soon</Link>
          </li>
        </Links>
      </FooterSection>

      <p>{currentYear} - &copy; E-PLAY All rights reserved.</p>
    </div>
  </Container>
)

export default Footer
