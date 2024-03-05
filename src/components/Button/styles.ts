import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.blue : 'transparent'};
  color: ${colors.white};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.blue : colors.white)};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: transparent;
  color: ${colors.white};
  border: 2px solid ${colors.white};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`
