import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from './app';

test('render', () => {
  const tree = renderer.create(<App />);
  expect(tree.toJSON()).toMatchSnapshot();
});
