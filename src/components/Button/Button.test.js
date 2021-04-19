import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Button }  from './Button';

const onClick = function () {
  console.log ('Hello world');
}

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Button onClick={onClick}>Give me more</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
     <Button onClick={onClick}>Give me more</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});