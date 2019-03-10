import React from 'react';
import CardList  from './CardList.js';

import renderer from 'react-test-renderer';

const profiles = [{
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
},
{
  'login': 'ar',
  'id': 100354,
  'node_id': 'MDQ6VXNlcjEwMDM1NA==',
  'avatar_url': 'https://avatars3.githubusercontent.com/u/100354?v=4',
  'gravatar_id': '',
  'url': 'https://api.github.com/users/ar',
  'html_url': 'https://github.com/ar',
  'followers_url': 'https://api.github.com/users/ar/followers',
  'following_url': 'https://api.github.com/users/ar/following{/other_user}',
  'gists_url': 'https://api.github.com/users/ar/gists{/gist_id}',
  'starred_url': 'https://api.github.com/users/ar/starred{/owner}{/repo}',
  'subscriptions_url': 'https://api.github.com/users/ar/subscriptions',
  'organizations_url': 'https://api.github.com/users/ar/orgs',
  'repos_url': 'https://api.github.com/users/ar/repos',
  'events_url': 'https://api.github.com/users/ar/events{/privacy}',
  'received_events_url': 'https://api.github.com/users/ar/received_events',
  'type': 'User',
  'site_admin': false,
  'name': 'Alejandro Revilla',
  'company': 'jPOS.org',
  'blog': 'http://jpos.org/blog',
  'location': 'Montevideo/Uruguay',
  'email': null,
  'hireable': null,
  'bio': null,
  'public_repos': 0,
  'public_gists': 23,
  'followers': 52,
  'following': 2,
  'created_at': '2009-06-30T14:42:48Z',
  'updated_at': '2018-10-16T18:48:42Z',
}];

describe('CardList', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CardList profiles={profiles}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
