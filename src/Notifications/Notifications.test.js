import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17' 

import Notifications from './Notifications'


Enzyme.configure({ adapter: new EnzymeAdapter() })


/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
 const setup = () => shallow(<Notifications />)


 const findByTestAttribute = (wrapper, value) => wrapper.find(`[data-test="${value}"]`) 
 
 
 test('renders App main class without error', () => {
   const wrapper = setup()
   const notificationsComponent = findByTestAttribute(wrapper, "notifications-component")
 
   expect(notificationsComponent.length).toBe(1)
 })