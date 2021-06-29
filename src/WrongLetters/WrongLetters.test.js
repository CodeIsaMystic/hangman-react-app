import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17' 


import { findByTestAttribute } from '../../test/testUtils'
import WrongLetters from './WrongLetters'


Enzyme.configure({ adapter: new EnzymeAdapter() })



/**
 * Factory function to create a ShallowWrapper for the WrongLetters component.
 * @function setup
 * @returns {ShallowWrapper}
 */
 const setup = () => shallow(<WrongLetters />)

 
 
 test('renders WrongLetters Component without error', () => {
   const wrapper = setup()
   const wrongLettersComponent = findByTestAttribute(wrapper, "wrong-letters-component")
 
   expect(wrongLettersComponent.length).toBe(1)
 })