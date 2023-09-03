import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createEditCabin } from "../../services/apiCabins"
import { toast } from "react-hot-toast"
import { useForm } from "react-hook-form"

export const useEditCabin = () => {

   const queryClient = useQueryClient()
    const {reset} = useForm()
    const { mutate: editCabin, isLoading: isEditing } = useMutation({
        // mutationFn: mutateData => createEditCabin(mutateData, editId),
        mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
        onSuccess: () => {
          toast.success('New Cabin successfully edited')
          queryClient.invalidateQueries(['cabins'])
          reset()
        },
        onError: (err) => toast.error(err.message),
        // onMutate: (newData) => createEditCabin(newData, editId),
      })

  return { editCabin, isEditing}
}
