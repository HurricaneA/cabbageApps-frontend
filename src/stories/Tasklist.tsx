import React from 'react';
import { Item } from './Item';
import './tasklist.css';

export interface ListProps {}

export const Tasklist = ({ ...props }: ListProps) => {
  return (
    <div>
      <Item label='Buy food' date='28th of June' />
      <Item label='Buy food' date='28th of June' />
      <Item label='Buy food' date='28th of June' />
      <Item label='Buy food' date='28th of June' />
      <Item label='Buy food' date='28th of June' />
    </div>
  );
};
