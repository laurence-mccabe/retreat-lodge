import { styled } from "styled-components"
import Logout from "../features/authentication/Logout"

const StyledHeader = styled.header`
background-color: #efb925;
padding: 1.2rem 4.8rem;
border-bottom: 1px solid var(--color-grey-100);

`

const Header = () => {
  return (
    <StyledHeader>
      <Logout />
    </StyledHeader>
  )
}

export default Header
