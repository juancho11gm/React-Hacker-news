import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { App, updateSearchTopStoriesState }  from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const list = [
  { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
  { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' },
];

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <App />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('update the search top stories', () => {
    const appComponent = shallow(<App/>);
    appComponent.setState({
      searchKey: 'css'
    })
    appComponent.setState(updateSearchTopStoriesState(list,1));
    appComponent.setState({
      searchKey: 'javascript'
    })
    appComponent.setState(updateSearchTopStoriesState(list,2));
    console.log(appComponent.state('results'));
    const keys = Object.keys(appComponent.state('results'));
    expect(keys.length).toBe(2);
  });
  
});