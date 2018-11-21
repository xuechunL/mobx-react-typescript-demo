import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Counter } from '../components/Counter/Counter'

interface ICounterContainerProps {
  [propName: string]: any
}

@inject('stores')
@observer
export class CounterContainer extends React.Component<ICounterContainerProps, {}> {

  render() {
    const { stores: { counterStore } } = this.props
    return (
      <Counter
        counter={counterStore.counter}
        increment={counterStore.increment}
        decrement={counterStore.decrement}
      />
    )
  }
}
