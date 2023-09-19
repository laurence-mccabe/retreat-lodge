import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateBooking } from "../../services/apiBookings"
import { toast } from "react-hot-toast"

const useCheckout = () => {
  const queryClient = useQueryClient()

  const {mutate: checkout, isLoading: isCheckingOut} 
  = useMutation(
    {
        mutationFn: (bookingId) => updateBooking(bookingId,{
            status: "checked-out",
        }), //26.44

        onSuccess: (data) => {
            toast.success(`Booking #${data.id} has been checked out`)
            queryClient.invalidateQueries({active: true})
        },

        onError: (error) => {
            toast.error("There was an error while checking out", error.message)
        }
    }
  )
  return {checkout, isCheckingOut}
}

export default useCheckout