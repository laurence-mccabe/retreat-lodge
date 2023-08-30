import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-hot-toast"
import { deleteCabin as deleteCabinAPI } from "../../services/apiCabins"


export default function useDeleteCabin() {
    
const queryClient = useQueryClient()

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinAPI,
    onSuccess: () => {
      toast.success('Cabin successfully deleted')
      queryClient.invalidateQueries(['cabins'])
    },
    onError: (err) => toast.error(err.message),
    // onError: (err, cabin, context) => {
    //   queryClient.setQueryData(["cabins"], context.previousValue);
  })

  return { isDeleting, deleteCabin }
}
  
  
