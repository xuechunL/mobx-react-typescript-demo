import * as React from 'react'
import { CounterContainer } from './containers'
import Timer from './components/Timer'

const renderDevTool = () => {
  console.log('node env', process.env.NODE_ENV)
  if (process.env.NODE_ENV !== 'production') {
    const DevTools = require('mobx-react-devtools').default
    return <DevTools />
  }
  return null
}
export class App extends React.Component {
  render() {
    return (
      <div>
        <CounterContainer />
        <Timer />
        {renderDevTool()}
      </div>
    )
  }
}
