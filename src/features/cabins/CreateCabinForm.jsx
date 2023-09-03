import Input from '../../ui/Input'
import Form from '../../ui/Form'
import Button from '../../ui/Button'
import FileInput from '../../ui/FileInput'
import Textarea from '../../ui/Textarea'
import { useForm } from 'react-hook-form'
import FormRow from '../../ui/FormRow'
import { useCreateCabin } from './useCreateCabin'
import { useEditCabin } from './useEditCabin'

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit

  const { isEditing, editCabin } = useEditCabin()
  const { isCreating, createCabin } = useCreateCabin()

  const isEditSession = Boolean(editId)
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  })
  const errors = formState.errors
  // console.log('errors: ', errors)
  const isWorking = isCreating || isEditing
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function onSubmit(formData) {
    console.log('formData in CreateCabinForm: ', formData)
    const image =
      typeof formData.image === 'string' ? formData.image : formData.image[0]
    if (isEditSession) {
      editCabin(
        { newCabinData: { ...formData, image }, id: editId },
        {
          onSuccess: (data) => {
            {
              onCloseModal?.()
            }
          },
        }
      )
    } else {
      createCabin(
        { ...formData, image: image },
        {
          onSuccess: (data) => {
            reset()
            onCloseModal?.()
          },
        }
      )
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function onError(errors) {
    console.log('errors in  onError function CreateCabinForm: ', errors)
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? 'modal' : 'regular'}
    >
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
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
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
