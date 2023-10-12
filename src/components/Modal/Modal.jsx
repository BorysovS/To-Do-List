import { useForm } from 'react-hook-form';
import { Backdrop, Modal, BtnClose, Title, Input, TextArea, Form } from './Modal.styled';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/taskSlice';
import { nanoid } from 'nanoid'

import { MdClose } from "react-icons/md";

export const ModalWindow = ({ type, data, saveData, onClose }) => {
  const dispatch = useDispatch();

  const initialFormValues = {
    title: '',
    message: '',
    isCompleted: false,
  };

  if (type === 'edit' && data) {
    initialFormValues.title = data.title;
    initialFormValues.message = data.message;
    initialFormValues.isCompleted = data.isCompleted;
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialFormValues });

  const onSubmit = data => {
    if (type === 'edit') {
        console.log("first")
        saveData(data); 
    } else {
    console.log(data);
    dispatch(addTask({...data, id: nanoid()}))
    }
      onClose();
  };

  const closeModal = () => {
    reset();
    onClose();
  };

  return (
    <Backdrop>
      <Modal>
      <BtnClose type="button" onClick={() => closeModal()}><MdClose size={24} /></BtnClose>
        <Title>{type === 'add' ? "Add Task" : "Edit Task"}</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* <inputWrap> */}
          <label>Title task</label>
            <Input
            placeholder='Title'
              type="text"
              {...register('title', {
                required: 'This field is required',
              })}
            />
            {errors.title && <p>{errors.title.message}</p>}
          {/* </inputWrap> */}
          <label>Description</label>
            <TextArea
            placeholder='Enter your description'
              {...register('message', {
                required: 'This field is required',
              })}
            />
            {errors.title && <p>{errors.title.message}</p>}

          <div>
            <label htmlFor="isCompleted">You complited your task ?</label>
              <input
                type="checkbox"
                id="isCompleted"
                {...register('isCompleted')}
              />
            
          </div>
          <button type="submit">Submit</button>
        </Form>
        
      </Modal>
    </Backdrop>
  );
};
