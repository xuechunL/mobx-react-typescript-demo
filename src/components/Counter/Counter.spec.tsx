import * as React from 'react'
import { Counter } from './Counter'
import { shallow } from 'enzyme'
import { NumberDisplay, Button } from './styles'

test('that counter is rendered', () => {
  const wrapper = shallow(
    <Counter
      counter={1}
      increment={() => { console.log('increment') }}
      decrement={() => { console.log('decrement') }}
    />)

  expect(wrapper.find(NumberDisplay).childAt(0).text()).toBe('1')
})

test('that decrement is called when button decrement is clicked', () => {
  const decrementSpy = jest.fn()
  const wrapper = shallow(
    <Counter
      counter={1}
      increment={() => { console.log('increment') }}
      decrement={decrementSpy}
    />)

  wrapper.find(Button).first().simulate('click')

  expect(decrementSpy).toBeCalled()
})

test('that increment is called when button increment is clicked', () => {
  const incrementSpy = jest.fn()
  const wrapper = shallow(
    <Counter
      counter={1}
      increment={incrementSpy}
      decrement={() => { console.log('decrement') }}
    />)

  wrapper.find(Button).at(1).simulate('click')

  expect(incrementSpy).toBeCalled()
})
