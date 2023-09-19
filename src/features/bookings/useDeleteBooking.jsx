import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-hot-toast"
import { deleteBooking as deleteBookingAPI } from "../../services/apiBookings"


export default function useDeleteBooking() {
    
const queryClient = useQueryClient()

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingAPI,
    onSuccess: () => {
      toast.success('Booking successfully deleted')
      // invalidates current stored data for bookings, forcing a refetch
      queryClient.invalidateQueries({
        queryKey: ['bookings'],
      })
    },
    onError: (err) => toast.error(err.message),
    // onError: (err, cabin, context) => {
    //   queryClient.setQueryData(["cabins"], context.previousValue);
  })

  return { isDeleting, deleteBooking }
}
  
  
