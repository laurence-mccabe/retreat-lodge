import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-hot-toast"
import { useForm } from "react-hook-form"
import { updateSetting as updateSettingAPI } from "../../services/apiSettings"

export const useUpdateSetting = () => {

    const queryClient = useQueryClient()
    const {reset} = useForm()
    const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
        // mutationFn: mutateData => createEditCabin(mutateData, editId),
        mutationFn: updateSettingAPI,
        onSuccess: () => {
          toast.success('Setting successfully updated')
          queryClient.invalidateQueries(['settings'])
          reset()
        },
        onError: (err) => toast.error(err.message),
        // onMutate: (newData) => createEditCabin(newData, editId),
      })

  return { updateSetting, isUpdating}
}
