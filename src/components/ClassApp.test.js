import React from 'react';
import ClassApp  from './ClassApp.js';
import renderer from 'react-test-renderer';


describe('CardList', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ClassApp initialData={{appName:'Title page'}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
