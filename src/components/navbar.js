import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Navbar = styled.nav`
  background-color: hsl(200, 50%, 50%);
  padding: 30px;
`
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 500px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Title = styled.h1`
  margin: 0;
  display: block;
`

const Burger = styled.div`
  display: none;
  width: 30px;
  height: 30px;
  border: 2px solid #0a0a0a;
  border-radius: 3px;

  @media (max-width: 500px) {
    display: block;
  }
`

const Links = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  margin-left: -15px;
  margin-bottom: -10px;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    display: none;
  }

  li {
    display: block;
    margin-left: 15px;
    margin-bottom: 10px;
    color: hsl(200, 50%, 20%);
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
    cursor: pointer;

    &.active,
    &:hover {
      text-decoration: underline;
      text-decoration-color: hsl(200, 50%, 30%);
      border: none;
      outline: none;
    }

    &:hover {
      margin-top: -1px;
      margin-bottom: 1px;
    }
  }
`

export default () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about/" },
    { name: "Blog", path: "/blog/" },
    { name: "Contact", path: "/contact/" },
    { name: "CV", path: "/cv/" },
  ]

  return (
    <Navbar>
      <Container>
        <Title>The Callum</Title>
        <Burger />
        <Links>
          {pages.map(({ name, path }) => (
            <li>
              <Link activeClassName="active" to={path}>
                {name}
              </Link>
            </li>
          ))}
        </Links>
      </Container>
    </Navbar>
  )
}
