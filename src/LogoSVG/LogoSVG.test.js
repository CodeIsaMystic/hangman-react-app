import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17' 

import LogoSVG from './LogoSVG'


Enzyme.configure({ adapter: new EnzymeAdapter() })


/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
 const setup = () => shallow(<LogoSVG />)


 const findByTestAttribute = (wrapper, value) => wrapper.find(`[data-test="${value}"]`) 
 
 
 test('renders App main class without error', () => {
   const wrapper = setup()
   const SVGContainer = findByTestAttribute(wrapper, "svg-container")
 
   expect(SVGContainer.length).toBe(1)
 })