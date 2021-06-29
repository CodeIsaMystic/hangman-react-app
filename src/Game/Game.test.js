import React from 'react'

import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17' 

import Game from './Game'


Enzyme.configure({ adapter: new EnzymeAdapter() })


/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
 const setup = () => shallow(<Game />)


 const findByTestAttribute = (wrapper, value) => wrapper.find(`[data-test="${value}"]`) 
 
 
 test('renders App main class without error', () => {
   const wrapper = setup()
   const gameContainer = findByTestAttribute(wrapper, "game-container")
 
   expect(gameContainer.length).toBe(1)
 })