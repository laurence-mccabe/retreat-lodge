import Input from '../../ui/Input'
import Form from '../../ui/Form'
import Button from '../../ui/Button'
import FileInput from '../../ui/FileInput'
import Textarea from '../../ui/Textarea'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { createEditCabin } from '../../services/apiCabins'
import FormRow from '../../ui/FormRow'

function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit
  const isEditSession = Boolean(editId)

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  })
  const errors = formState.errors
  // console.log('errors: ', errors)

  const queryClient = useQueryClient()

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

  const isWorking = isCreating || isEditing

  function onSubmit(data) {
    // console.log('data.image[0] in CreateCabinForm: ', data.image[0]) 12:13 is where he checks the console
    console.log('data in CreateCabinForm: ', data)
    const image = typeof data.image === 'string' ? data.image : data.image[0]
    if (isEditSession) {
      editCabin({ newCabinData: { ...data, image }, id: editId })
    }
    else{createCabin({ ...data, image: image })}
    
  }

  function onError(errors) {
    console.log('errors in  onError function CreateCabinForm: ', errors)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register('name', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Minimum length is 1 character',
            },
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register('maxCapacity', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Minimum length is 1 character',
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register('regularPrice', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Minimum length is 1 character',
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required',
            validate: (value) => {
              const formValues = getValues()
              const regularPrice = parseFloat(formValues.regularPrice)

              if (value >= regularPrice || value < 0) {
                return 'Discount must be between 0 and the regular price value set above'
              }
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          disabled={isWorking}
          type="number"
          id="description"
          defaultValue=""
          {...register('description', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Minimum length is 1 character',
            },
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          {...register('image', {
            required: isEditSession ? false : 'This field is required',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? 'Edit Cabin' : 'Create new Cabin'}
        </Button>
      </FormRow>
    </Form>
  )
}

export default CreateCabinForm
