import React from "react"
import styled, { createGlobalStyle } from 'styled-components'

const Nav = styled.nav`
    background-color: red;
`;

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
`;

export default () => (
    <>
        <GlobalStyle/>
        <Nav>nav</Nav>
        <div>Hello world! fclgv</div>
    </>
)
