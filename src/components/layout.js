import React from "react"
import { createGlobalStyle } from "styled-components"

import Navbar from "./navbar"
import Container from "./container"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Courier New', Courier, monospace;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
`

export default ({ children }) => (
  <>
    <GlobalStyle />
    <Navbar />

    <main>
      <Container>{children}</Container>
    </main>
  </>
)
