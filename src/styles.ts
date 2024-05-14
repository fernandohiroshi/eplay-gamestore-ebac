import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#F5F1ED',
  black: '#0a0a0a',
  gray: '#141414',
  lightGray: '#1F1F1F',
  purple: '#731dd8'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
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
  padding-top: 40px;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

@media (max-width: ${breakpoints.desktop}) {
  max-width: 80%;
}
}
`
