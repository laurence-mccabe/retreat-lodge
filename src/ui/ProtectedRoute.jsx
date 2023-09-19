import { useNavigate } from 'react-router-dom'
import useUser from '../features/authentication/useUser'
import Spinner from './Spinner'
import styled from 'styled-components'
import { useEffect } from 'react'

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProtectedRoute = ({ children }) => {
  //load authenticated user:
  const { isLoading, isAuthenticated } = useUser()
  const navigate = useNavigate()

  //if there is no authenticated user, redirect to login page
  useEffect(function() {
    if (!isAuthenticated && !isLoading) {
        navigate('/login')
    }   
    
}, [isAuthenticated, isLoading, navigate])

  //while loading show a spinner:
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )
        
    // if there is a user, render the app.
  if(isAuthenticated) return children
}

export default ProtectedRoute
