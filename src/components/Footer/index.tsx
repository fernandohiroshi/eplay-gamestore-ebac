import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
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
              Ação
            </S.Link>
            <S.Link
              title="Clique aqui para acessar jogos de esportes"
              to="/categories#sports"
            >
              Esportes
            </S.Link>
            <S.Link
              title="Clique aqui para acessar jogos de simulaçao"
              to="/categories#simulation"
            >
              Simulação
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
        <S.SectionTitle>Acesso Rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar a seçao de promocoes"
              to="/#on-sale"
            >
              Promoções
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
