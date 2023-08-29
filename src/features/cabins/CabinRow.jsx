import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;


const CabinRow = ({ cabin }) => {
  const { name, maxCapacity, regularPrice, discount, image, id: cabinId } = cabin;
  const  queryClient = useQueryClient();

  const {isLoading: isDeleting, mutate} = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      alert('Cabin successfully deleted')
      queryClient.invalidateQueries(["cabins"]);
    },
    onError: (err) => alert(err.message),
    // onError: (err, cabin, context) => {
    //   queryClient.setQueryData(["cabins"], context.previousValue);
    })




  
    // mutationKey: ["cabins", cabin.id],
    // mutationFn: deleteCabin,
    // onMutate: async (cabin) => {
    //   await queryClient.cancelQueries(["cabins"]);
    //   const previousValue = queryClient.getQueryData(["cabins"]);
    //   queryClient.setQueryData(["cabins"], (old) => {
    //     return old.filter((c) => c.id !== cabin.id);
    //   });
    //   return { previousValue };
    // },
    // onError: (err, cabin, context) => {
    //   queryClient.setQueryData(["cabins"], context.previousValue);
    // },
    // onSettled: () => {
    //   queryClient.invalidateQueries(["cabins"]);
    // },
  // });


  return (
    // <div>Row</div>
    <TableRow role="row">
      {image ? <Img src={image} alt={name} /> : <div></div> }
      <Cabin>{name}</Cabin>
      Fits up to: {maxCapacity} guests
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>${discount}</Discount>
      <button onClick={() => mutate(cabinId)} disabled={isDeleting}>Delete</button>
    </TableRow>
  );
}

export default CabinRow