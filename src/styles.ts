import { createGlobalStyle } from 'styled-components'

const colors = {
  white: '#EEE',
  black: '#111',
  gray: '#333',
  green: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: Roboto, sans-serif;
}

body {
  background-color: ${colors.black};
  color: ${colors.white};
}
`
