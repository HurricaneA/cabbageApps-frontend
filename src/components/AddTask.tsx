import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';

const AddTask = () => {
  const dispatch = useDispatch();
  const { addTask } = bindActionCreators(actionCreators, dispatch);

  interface IState {
    newtask: {
      title: string;
      completed: boolean;
      date: string;
    };
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IState['newtask']>();

  const onSubmit = (data: IState['newtask']): void => {
    addTask(data);
    reset();
  };

  return (
    <div className='p-3'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Task'
            {...register('title', { required: true })}
          />
          {errors.title && (
            <span className='error-span'>This field cannot be empty</span>
          )}
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Label>Mark as completed</Form.Label>
          <div className='form-check form-switch '>
            <input
              className='form-check-input slider'
              {...register('completed', { required: false })}
              type='checkbox'
            />
          </div>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicDate'>
          <Form.Label>Date</Form.Label>
          <Form.Control
            type='date'
            placeholder='Date'
            {...register('date', { required: true })}
          />
          {errors.date && (
            <span className='error-span'>This field cannot be empty</span>
          )}
        </Form.Group>
        <Button
          className='float-end text-center'
          type='submit'
          variant='outline-primary'
        >
          Add Task
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;
