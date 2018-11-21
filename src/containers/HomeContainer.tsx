import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { ApplicationStore } from '../stores/ApplicationStore'
import { Home } from '../components/Home/Home'

interface IHomeContainerProps {
  store?: ApplicationStore
}

@inject('store')
@observer
export class HomeContainer extends React.Component<IHomeContainerProps, {}> {

  render() {
    const { store } = this.props
    return (
      <Home
        counter={store.counter}
        increment={store.increment}
        decrement={store.decrement}
      />
    )
  }
}
