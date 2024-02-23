import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: transparent;
  color: ${colors.white};
  border: 2px solid ${colors.white};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
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
