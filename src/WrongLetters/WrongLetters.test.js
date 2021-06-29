import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17' 

import WrongLetters from './WrongLetters'


Enzyme.configure({ adapter: new EnzymeAdapter() })


/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
 const setup = () => shallow(<WrongLetters />)


 const findByTestAttribute = (wrapper, value) => wrapper.find(`[data-test="${value}"]`) 
 
 
 test('renders App main class without error', () => {
   const wrapper = setup()
   const wrongLettersContainer = findByTestAttribute(wrapper, "wrong-letters-container")
 
   expect(wrongLettersContainer.length).toBe(1)
 })