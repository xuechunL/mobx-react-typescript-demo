// Observable local component state
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import * as React from 'react'
import styled from 'styled-components'

const Container =  styled.div`
  width: 18em;
  margin: 1em auto;
  text-align: center;
`

const Button = styled.button`
  background-color: antiquewhite;
  border: 1px solid #ecd6b9;
  margin: 0 1em;
  font-weight: bold;
  font-size: 22px;
  border-radius: 5px;
  color: #867155;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

let id: any

@observer
export default class Timer extends React.Component {
  @observable secondsPassed = 0

  componentDidMount() {
    id = setInterval(() => {
      // tslint:disable-next-line:no-increment-decrement
      this.secondsPassed ++
    }, 1000)
  }

  onStop = () => {
    this.secondsPassed = 0
    clearInterval(id)
  }

  render() {
    return (
      <Container>
        <span>Seconds passed: { this.secondsPassed } </span>
        <Button onClick={this.onStop}>Stop</Button>
      </Container>
    )
  }
}
