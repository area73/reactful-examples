import React from 'react';
import {storiesOf} from '@storybook/react';
import GithubUserSearch from './GithubUserSearch.js';
import {text, number} from '@storybook/addon-knobs';
// TODO fix CSS
import '../../../public/bundles/main.css';

import mdInfo from './GithubUserSearch.md';

import Card from './Card.js';
import {action} from '@storybook/addon-actions';

const stories = storiesOf('GitHub User Search', module);

stories.add('Application', () => (
  <GithubUserSearch
    initialData={{appName: text('initialData.appName', 'Hello Storybook')}}
  />
), {mdInfo});

stories.add(
  'Card',
  () => {
    const props = {
      update: action('delete-action'),
      name: text('name', 'Rui Díaz de Vivar'),
      company: text('company', 'React and Co'),
      id: number('id', 123),
      avatar_url: text(
        'avatar_url',
        'https://avatars1.githubusercontent.com/u/2030605?v=4',
      ),
    };
    return <Card {...props} />;
  },
  {
    notes: 'A very simple example of addon notes',
  },
);
