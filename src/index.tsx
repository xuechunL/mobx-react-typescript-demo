import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { App } from './App'
import { ApplicationStore } from './stores'

const applicationStore = new ApplicationStore()

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render((
      <Provider store={applicationStore}>
        <App />
      </Provider>
    ), document.getElementById('root'))
  })
}
