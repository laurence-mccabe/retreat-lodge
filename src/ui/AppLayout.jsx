import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'
import { styled } from 'styled-components'

const StyledAppLayout = styled.div`
  display: grid;
  /* change this bcak later to 24 rem */
  grid-template-columns: 7rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow-y: scroll;
`

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

const AppLayout = () => {
  return (
    <div>
      <StyledAppLayout>
        <Header />
        <SideBar />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </StyledAppLayout>
    </div>
  )
}

export default AppLayout
