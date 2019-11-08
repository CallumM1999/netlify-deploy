import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Navbar = styled.nav`
  background-color: hsl(200, 50%, 50%);
  padding: 30px;
`

const Title = styled.h1`
  margin: 0;
  display: block;
`

const Links = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  margin-left: -15px;
  margin-bottom: -10px;
  flex-wrap: wrap;

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
  ]

  return (
    <Navbar>
      <Title>The Callum</Title>
      <Links>
        {pages.map(({ name, path }) => (
          <li>
            <Link activeClassName="active" to={path}>
              {name}
            </Link>
          </li>
        ))}
      </Links>
    </Navbar>
  )
}
