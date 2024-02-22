import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
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
  text-decoration: none;
}

body {
  background-color: ${colors.black};
  color: ${colors.white};
  padding-top: 40px;
}
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
