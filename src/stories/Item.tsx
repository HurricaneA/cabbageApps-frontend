import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { Button } from './Button';
import './item.css';

export interface ItemProps {
  expand?: boolean;

  label: string;

  date: string;

  completed?: boolean;

  edit?: boolean;

  handleOpen?: () => void;
  handleClose?: () => void;
}

export const Item = ({
  label,
  date,
  expand,
  edit,
  completed,
  handleOpen,
  handleClose,
  ...props
}: ItemProps) => {
  const mode = expand ? 'item-expanded' : 'item-closed';
  const mark = completed ? 'mark-complete' : 'mark-incomplete';
  return (
    <div>
      <div className={['item', mode, mark].join(' ')}>
        <div className='titlebar'>
          <h5 className='title'>{label}</h5>
          <h5 className='date'>{date}</h5>
          {expand ? (
            <FaChevronUp size={20} className='dropdown' onClick={handleClose} />
          ) : (
            <FaChevronDown
              size={20}
              className='dropdown'
              onClick={handleOpen}
            />
          )}
        </div>
        <div className='bottombar'>
          {expand ? (
            <>
              <Button
                label={completed ? 'Mark incomplete' : 'Mark completed'}
                variant={completed ? 'danger' : 'success'}
              />{' '}
              <Button label={edit ? 'Cancel' : 'Edit'} variant='secondary' />
              <Button
                label={edit ? 'Submit' : 'Delete'}
                variant={edit ? 'outline-primary' : 'outline-danger'}
              />{' '}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
