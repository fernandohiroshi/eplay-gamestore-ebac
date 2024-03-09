import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categories</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </S.Link>

            <S.Link
              title="Clique aqui para acessar jogos de acao"
              to="/categories#action"
            >
              Acao
            </S.Link>
            <S.Link
              title="Clique aqui para acessar jogos de esportes"
              to="/categories#sport"
            >
              Esportes
            </S.Link>
            <S.Link
              title="Clique aqui para acessar jogos de simulaçao"
              to="/categories#simulation"
            >
              Simulaçao
            </S.Link>
            <S.Link
              title="Clique aqui para acessar jogos de luta"
              to="/categories#fight"
            >
              Luta
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>

      <S.FooterSection>
        <S.SectionTitle>Acesso rapido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar a seçao de promocoes"
              to="/#on-sale"
            >
              Promocoes
            </S.Link>
            <S.Link
              title="Clique aqui para acessar a seçao em breve"
              to="/#coming-soon"
            >
              Em breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>

      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados.</p>
    </div>
  </S.Container>
)

export default Footer
