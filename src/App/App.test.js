import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17' 

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })


/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />)


const findByTestAttribute = (wrapper, value) => wrapper.find(`[data-test="${value}"]`) 


test('renders App main class without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttribute(wrapper, "component-app")

  expect(appComponent.length).toBe(1)
})
