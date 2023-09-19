import { useMutation, useQueryClient } from '@tanstack/react-query'
import { logout as logoutAPI } from '../../services/apiAuth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const useLogout = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      toast.success('Logout successful')
      queryClient.removeQueries()
      navigate('/login', { replace: true })

    },
    onError: (err) => toast.error(err.message),
  })

  return { logout, isLoading }
}

export default useLogout
