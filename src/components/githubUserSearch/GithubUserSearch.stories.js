import React from 'react';
import {storiesOf} from '@storybook/react';
import GithubUserSearch from './GithubUserSearch.js';
import {text, number} from '@storybook/addon-knobs';
// TODO fix CSS
import '../../../public/bundles/main.css';

import Card from './Card.js';

const stories = storiesOf('GitHub User Search', module);

stories.add('Application', () => (
  <GithubUserSearch
    initialData={{appName: text('initialData.appName', 'Hello Storybook')}}
  />
));

stories.add('Card', () => {
  const props = {
    name: text('name', 'Rui Díaz de Vivar'),
    company: text('company', 'React and Co'),
    id: number('id', 123),
    avatar_url: text('avatar_url', 'https://avatars1.githubusercontent.com/u/2030605?v=4'),
  };
  return <Card {...props}/>;
});
