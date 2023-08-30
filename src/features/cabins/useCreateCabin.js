import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createEditCabin } from "../../services/apiCabins"
import { toast } from "react-hot-toast"
import { useForm } from "react-hook-form"

export const useCreateCabin = () => {

    const queryClient = useQueryClient()
    const {reset} = useForm()
    const { mutate: createCabin, isLoading: isCreating } = useMutation({
        // mutationFn: mutateData => createEditCabin(mutateData, editId),
        mutationFn: createEditCabin,
        onSuccess: () => {
          toast.success('New Cabin successfully created')
          queryClient.invalidateQueries(['cabins'])
          reset()
        },
        onError: (err) => toast.error(err.message),
        // onMutate: (newData) => createEditCabin(newData, editId),
      })
      return { createCabin, isCreating }

  
}
