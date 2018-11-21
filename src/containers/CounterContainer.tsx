import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Counter } from '../components/Counter/Counter'
import CounterStore from '../stores/CounterStore'

interface ICounterContainerProps {
  counterStore?: CounterStore
}

@inject('counterStore')
@observer
export class CounterContainer extends React.Component<ICounterContainerProps, {}> {

  render() {
    const { counterStore } = this.props
    return (
      <Counter
        counter={counterStore.counter}
        increment={counterStore.increment}
        decrement={counterStore.decrement}
      />
    )
  }
}
