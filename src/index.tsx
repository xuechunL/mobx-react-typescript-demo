import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { App } from './App'
import createStores from './stores/createStores'

const appStores = createStores()

// tslint:disable-next-line:no-shadowed-variable
const renderApp = (root: Element, App: React.ComponentClass) => {
  console.log('global stores', appStores)
  const { counterStore } = appStores
  const props = { counterStore }
  // Polish: Don’t ever create global store instances,
  // You can not write any reasonable and reliable tests for your components.
  // Instead use the Provider to inject your stores into your components props
  ReactDOM.render((
    <Provider {...props}>
      <App />
    </Provider>
  ), root)
}

const root = document.getElementById('root')
renderApp(root, App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').App
    renderApp(root, NewApp)
  })
}
