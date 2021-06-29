import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17' 


import { findByTestAttribute } from '../../test/testUtils'
import HangmanSVG from './HangmanSVG'


Enzyme.configure({ adapter: new EnzymeAdapter() })


/**
 * Factory function to create a ShallowWrapper for the HangmanSVG component.
 * @function setup
 * @returns {ShallowWrapper}
 */
 const setup = () => shallow(<HangmanSVG />)


 
 
 test('renders Hangman SVG without error', () => {
   const wrapper = setup()
   const SVGComponent = findByTestAttribute(wrapper, "svg-component")
 
   expect(SVGComponent.length).toBe(1)
 })