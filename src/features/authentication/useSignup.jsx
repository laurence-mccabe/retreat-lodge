import { useMutation } from '@tanstack/react-query'
import { signup as signupAPI } from '../../services/apiAuth'
import toast from 'react-hot-toast'

const useSignup = () => {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupAPI,
    onSuccess: (user) => {
      console.log(user)
      toast.success(
        `Welcome ${user.fullName}, please verify the new account from the user's email.`
      )
    },
  })
  return { signup, isLoading }
}

export default useSignup
