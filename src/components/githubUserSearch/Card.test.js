import React from 'react';
import Card  from './Card.js';

import renderer from 'react-test-renderer';


const props = {
  'login': 'area73',
  'id': 2030605,
  'node_id': 'MDQ6VXNlcjIwMzA2MDU=',
  'avatar_url': 'https://avatars1.githubusercontent.com/u/2030605?v=4',
  'gravatar_id': '',
  'url': 'https://api.github.com/users/area73',
  'html_url': 'https://github.com/area73',
  'followers_url': 'https://api.github.com/users/area73/followers',
  'following_url': 'https://api.github.com/users/area73/following{/other_user}',
  'gists_url': 'https://api.github.com/users/area73/gists{/gist_id}',
  'starred_url': 'https://api.github.com/users/area73/starred{/owner}{/repo}',
  'subscriptions_url': 'https://api.github.com/users/area73/subscriptions',
  'organizations_url': 'https://api.github.com/users/area73/orgs',
  'repos_url': 'https://api.github.com/users/area73/repos',
  'events_url': 'https://api.github.com/users/area73/events{/privacy}',
  'received_events_url': 'https://api.github.com/users/area73/received_events',
  'type': 'User',
  'site_admin': false,
  'name': 'Rodrigo',
  'company': 'Area 73',
  'blog': 'http://www.siete3.com',
  'location': 'Madrid',
  'email': null,
  'hireable': true,
  'bio': null,
  'public_repos': 102,
  'public_gists': 21,
  'followers': 7,
  'following': 59,
  'created_at': '2012-07-24T00:25:37Z',
  'updated_at': '2019-03-07T11:09:21Z',
};

describe('Card', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Card key={props.id}{...props}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
