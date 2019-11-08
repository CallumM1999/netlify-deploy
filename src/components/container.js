import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 50px auto;
  max-width: 1200px;
  border-radius: 5px;
  border: 1px solid #eee;
  padding: 30px;
`

export default ({ children }) => <Container>{children}</Container>
