import styled from 'styled-components'
import { colors } from '../../styles'

type InputBoxProps = {
  maxw?: string
}
type RowProps = {
  mtop?: string
}
type PayButtonProps = {
  isactive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.mtop || '0'};
  align-items: flex-end;
`

export const InputBox = styled.div<InputBoxProps>`
  flex: auto;

  max-width: ${(props) => props.maxw || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.white};
    width: 100%;
  }
`
export const PayButton = styled.button<PayButtonProps>`
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isactive ? colors.purple : colors.black};
  height: 32px;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`
