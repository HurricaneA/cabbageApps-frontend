import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiShow, BiHide } from 'react-icons/bi';

import './App.scss';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import { actionCreators, State } from './redux/index';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect, useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const { fetchTasks } = bindActionCreators(actionCreators, dispatch);

  const payload = useSelector((state: State) => state.task);

  useEffect(() => {
    fetchTasks('asc');
  }, []);

  const [hideAddTask, sethideAddTask] = useState(false);

  return (
    <div className='App'>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={12} lg={6}>
            <Card className='my-5'>
              <Card.Title className='text-center'>
                <h2>Todo App</h2>
              </Card.Title>
              <Button
                variant='light'
                onClick={() => sethideAddTask(!hideAddTask)}
              >
                {hideAddTask ? <BiShow size={40} /> : <BiHide size={40} />}
              </Button>
              {hideAddTask ? null : (
                <>
                  <AddTask /> <hr />
                </>
              )}

              <Tasks tasks={payload.tasks} />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
