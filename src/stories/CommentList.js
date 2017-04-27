import React from 'react';
import { storiesOf } from '@kadira/storybook';

import CommentList from '../CommentList';

storiesOf('CommentList', CommentList)
  .add('rebel', () => (
    <CommentList comments={rebelComments} totalCount={10} />
  ))
  .add('empire', () => (
    <CommentList comments={empireComments} totalCount={10} />
  ))
  .add('extras', () => (
    <CommentList comments={extrasComments} totalCount={10} />
  ));


const rebelComments = [
  {
    text: 'Echo Three to Echo Seven. Han, old buddy, do you read me?',
    author: {
      name: 'Luke',
      avatar: 'luke.jpg'
    }
  },
  {
    text: 'Someone has to save our skins. Into the garbage chute...',
    author: {
      name: 'Leah',
      avatar: 'leah.jpg'
    }
  },
  {
    text: 'Great, kid. Don\'t get cocky',
    author: {
      name: 'Han',
      avatar: 'han.jpg'
    }
  },
  {
    text: 'So who talks first? You talk first? I talk first?',
    author: {
      name: 'Poe',
      avatar: 'poe.jpg'
    }
  },
  {
    text: 'I\'m not Resistance. I\'m not a hero. I\'m a stormtrooper.',
    author: {
      name: 'Finn',
      avatar: 'finn.jpg'
    }
  }
];

const empireComments = [
  {
    text: 'The Force is strong with this one.',
    author: {
      name: 'Vader',
      avatar: 'vader.jpg'
    }
  },
  {
    text: 'Search your feelings, Lord Vader. He could destroy us.',
    author: {
      name: 'Palpatine',
      avatar: 'palpatine.jpg'
    }
  },
  {
    text: 'Nothing will stand in our way. I will finish what you started.',
    author: {
      name: 'Ren',
      avatar: 'ren.jpg'
    }
  }
];

const extrasComments = [
  {
    text: 'Enjaya kul a intekun kuthuow.',
    author: {
      name: 'Greedo',
      avatar: 'greedo.jpg'
    }
  },
  {
    text: 'You truly belong here with us among the clouds.',
    author: {
      name: 'Lando',
      avatar: 'lando.jpg'
    }
  },
  {
    text: 'Dook\'wab! Nekkel juuvar obwegadada',
    author: {
      name: 'Jawa',
      avatar: 'jawa.jpg'
    }
  }
];
