import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { App } from './App'
import createStores from './stores/createStores'

const appStores = createStores()

// tslint:disable-next-line:no-shadowed-variable
const renderApp = (root: Element, App: React.ComponentClass) => {
  console.log('global stores', appStores)
  ReactDOM.render((
    <Provider stores={appStores}>
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
