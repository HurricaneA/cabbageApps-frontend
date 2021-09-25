import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';

interface IProps {
  task: {
    _id: string;
    title: string;
    completed: boolean;
    date: string;
  };
}

const TaskItem = (props: IProps) => {
  const dispatch = useDispatch();
  const { deleteTask, updateTask } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const DATE_OPTIONS: any = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const date = new Date(props.task.date);
  const [expandTask, setexpandTask] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [inputValues, setInputValues] = useState({
    title: '',
    date: '',
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const handleEdit = (id: typeof props.task._id) => {
    // console.log('Edit ', id, inputValues.title, inputValues.date);
    let { title, date } = inputValues;

    if (!title) {
      title = props.task.title;
    }

    if (!date) {
      date = props.task.date;
    }

    updateTask(id, title, props.task.completed, date);
    setEditMode(!editMode);
    setexpandTask(!expandTask);
  };

  return (
    <div className='taskItem'>
      <Row
        style={{
          borderLeft: props.task.completed
            ? '3px solid #198754'
            : '3px solid #dc3545',
        }}
      >
        <Col xs={6} md={6} lg={6}>
          {editMode ? (
            <>
              <input
                type='text'
                defaultValue={props.task.title}
                className='form-control'
                name='title'
                onChange={(event) => onChangeHandler(event)}
              />
            </>
          ) : (
            <h5 style={{ paddingLeft: 3 }}>{props.task.title}</h5>
          )}
        </Col>
        <Col xs={4} md={4} lg={4}>
          {editMode ? (
            <>
              <input
                type='date'
                className='form-control'
                name='date'
                onChange={(event) => onChangeHandler(event)}
                defaultValue={props.task.date}
              />
            </>
          ) : (
            <h6 className='text-muted'>
              {date.toLocaleDateString('en-US', DATE_OPTIONS)}
            </h6>
          )}
        </Col>
        <Col xs={2} md={2} lg={2} className='text-end'>
          <span
            className='toggle-btn'
            onClick={() => setexpandTask(!expandTask)}
          >
            {expandTask ? (
              <FaChevronUp size={20} />
            ) : (
              <FaChevronDown size={20} />
            )}
          </span>
        </Col>

        {expandTask ? (
          <div className='d-flex-end mt-5 text-center'>
            <Button
              className='text-center mx-2'
              variant={props.task.completed ? 'outline-danger' : 'success'}
              onClick={() =>
                updateTask(
                  props.task._id,
                  props.task.title,
                  !props.task.completed,
                  props.task.date
                )
              }
            >
              {props.task.completed ? 'Mark pending' : 'Mark complete'}
            </Button>
            <Button
              className='text-center mx-2'
              variant='secondary'
              onClick={() => setEditMode(!editMode)}
            >
              {editMode ? 'Cancel' : 'Edit Task'}
            </Button>

            {editMode ? (
              <>
                <Button
                  className='text-center mx-2'
                  variant='success'
                  onClick={() => handleEdit(props.task._id)}
                >
                  Submit
                </Button>
              </>
            ) : (
              <>
                {' '}
                <Button
                  className='text-center'
                  variant='danger'
                  onClick={() => deleteTask(props.task._id)}
                >
                  Remove
                </Button>
              </>
            )}
          </div>
        ) : null}
      </Row>
    </div>
  );
};

export default TaskItem;
