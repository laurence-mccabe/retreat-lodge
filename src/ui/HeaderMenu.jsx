import styled from 'styled-components'
import Logout from '../features/authentication/Logout'
import ButtonIcon from './ButtonIcon'
import { HiOutlineUser } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

const StyledHeaderMenu = styled.div`
  display: flex;
  gap: 0.4rem;
`

const HeaderMenu = () => {
  const navigate = useNavigate()
  return (
    <StyledHeaderMenu>
      <ButtonIcon onClick={() => navigate('/account')}>
        <HiOutlineUser />
      </ButtonIcon>
        <DarkModeToggle />
      <Logout />
    </StyledHeaderMenu>
  )
}

export default HeaderMenu
