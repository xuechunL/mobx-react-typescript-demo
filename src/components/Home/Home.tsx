import * as React from 'react'
import { observer } from 'mobx-react'
import { Button, Container, NumberDisplay } from './styles'

interface IHomeProps {
  counter: number
  increment: () => void
  decrement: () => void
}

@observer
export class Home extends React.Component<IHomeProps, {}> {
  render() {
    const {
      counter,
      increment,
      decrement,
    } = this.props

    return (
      <Container>
        <Button onClick={decrement}>-</Button>
        <NumberDisplay>{counter}</NumberDisplay>
        <Button onClick={increment}>+</Button>
      </Container>
    )
  }
}
