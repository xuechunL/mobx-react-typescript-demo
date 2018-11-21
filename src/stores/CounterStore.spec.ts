import CounterStore from './CounterStore'

test('that counters initial value is zero', () => {
  const counterStore = new CounterStore()

  expect(counterStore.counter).toBe(0)
})

test('that increment, increments counter by one', () => {
  const counterStore = new CounterStore()

  counterStore.increment()

  expect(counterStore.counter).toBe(1)
})

test('that decrement, decrements counter by one', () => {
  const counterStore = new CounterStore()

  counterStore.decrement()

  expect(counterStore.counter).toBe(-1)
})
