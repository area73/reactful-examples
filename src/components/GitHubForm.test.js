import React from 'react';
import renderer from 'react-test-renderer';
import GitHubForm from './GitHubForm.js';


describe('GitHubForm', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<GitHubForm/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
