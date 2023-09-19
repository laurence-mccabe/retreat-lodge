import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateBooking } from "../../services/apiBookings"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const useCheckin = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const {mutate: checkin, isLoading: isCheckingIn} 
  = useMutation(
    {
        mutationFn: ({bookingId, breakfast}) => updateBooking(bookingId,{
            status: "checked-in",
            isPaid: true,
            ...breakfast,
        }), //26.44

        onSuccess: (data) => {
            toast.success(`Booking #${data.id} has been checked in`)
            queryClient.invalidateQueries({active: true})
            navigate('/')
        },

        onError: (error) => {
            toast.error("There was an error while checking in", error.message)
        }
    }
  )
  return {checkin, isCheckingIn}
}

export default useCheckin