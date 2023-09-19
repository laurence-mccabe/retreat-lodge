import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login as loginAPI } from '../../services/apiAuth'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export function useLogin() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
        navigate("/dashboard", {replace: true});
        console.log('Authentication successful', user);
        queryClient.setQueriesData(['user'], user);
        
      },
    onError: (error) => {
      console.log('ERROR', error)
      toast.error("Provided email and/or password are incorrect.")
    },
  })
  return {login, isLoading}
}

