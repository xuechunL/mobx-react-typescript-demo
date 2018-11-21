import { autorun } from 'mobx'
import CounterStore from './CounterStore'

const counterStore = new CounterStore()

const createStores = () => {
  return {
    counterStore,
  }
}

export default createStores

autorun(() => {
  console.log(counterStore.counter)
})
