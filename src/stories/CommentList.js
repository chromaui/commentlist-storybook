import React from 'react';
import { storiesOf } from '@kadira/storybook';

import CommentList from '../CommentList';

storiesOf('CommentList', CommentList)
  .add('HasData', () => (
    <CommentList comments={testComments.slice(0, 3)} totalCount={3} />
  ))
  .add('Paginated', () => (
    <CommentList comments={testComments} totalCount={10} />
  ))
  .add('Loading', () => <CommentList loading={true} />)
  .add('Empty', () => <CommentList comments={[]} />);

const testComments = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    author: {
      name: 'Luke',
      avatar: 'luke.jpg'
    }
  },
  {
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    author: {
      name: 'Leah',
      avatar: 'leah.jpg'
    }
  },
  {
    text: 'Duis aute irure dolor in reprehenderit in voluptate.',
    author: {
      name: 'Han',
      avatar: 'han.jpg'
    }
  },
  {
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    author: {
      name: 'Poe',
      avatar: 'poe.jpg'
    }
  },
  {
    text: 'Duis aute irure dolor in reprehenderit in voluptate.',
    author: {
      name: 'Finn',
      avatar: 'finn.jpg'
    }
  }
];
