import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-hot-toast"
import { useForm } from "react-hook-form"
import { updateCurrentUser } from "../../services/apiAuth"

export const useUpdateUser = () => {

   const queryClient = useQueryClient()
    const {reset} = useForm()
    const { mutate: updateUser, isLoading: isUpdating } = useMutation({
        // mutationFn: mutateData => createEditCabin(mutateData, editId),
        mutationFn: updateCurrentUser,
        onSuccess: ({data}) => {
            console.log(data)
          toast.success('User account successfully updated.')
        //   queryClient.setQueryData('user', user)
          queryClient.invalidateQueries({queryKey: ['user']})
          reset()
        },
        onError: (err) => toast.error(err.message),
        // onMutate: (newData) => createEditCabin(newData, editId),
      })

  return { updateUser, isUpdating}
}
