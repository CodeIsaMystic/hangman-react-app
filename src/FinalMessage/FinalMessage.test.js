import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17' 

import { findByTestAttribute } from '../../test/testUtils'
import FinalMessage from './FinalMessage'


Enzyme.configure({ adapter: new EnzymeAdapter() })


const defaultProps = { success: false }


/**
 * Factory function to create a ShallowWrapper for the FinalMessage component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
 const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props }

    return shallow(<FinalMessage {...setupProps} />)
 } 

 
 
 
 test('renders Final Message component without error', () => {
   const wrapper = setup()
   const finalMessageComponent = findByTestAttribute(wrapper, "final-message-component")
 
   expect(finalMessageComponent.length).toBe(1)
 })


 test('renders no text when `success` prop is false', () => {
    const wrapper = setup()
    const finalMessageComponent = findByTestAttribute(wrapper, "final-message-component")
   
    expect(finalMessageComponent.text()).toBe('')
 })


 test('renders non-empty message when `success` prop is true', () => {
    const wrapper = setup({ success: true })
    const finalMessage = findByTestAttribute(wrapper, "final-message")
   
    expect(finalMessage.text().length).not.toBe(0)
 })
