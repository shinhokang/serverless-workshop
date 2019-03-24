import * as messagesModule from './messages'

describe('@state/modules/messages', () => {
  it('exports a valid Vuex module', () => {
    expect(messagesModule).toBeAVuexModule()
  })

  let store
  beforeEach(() => {
    store = createModuleStore(messagesModule)
  })

  it('mutations.SET_MESSAGES correctly sets given array', () => {
    store.commit('SET_MESSAGES', sampleMessages)
    expect(store.state.messages).toEqual(sampleMessages)
  })

  it('actions.fetchMessages returns messages and mutate correctly', () => {
    return store.dispatch('fetchMessages').then((messages) => {
      expect(messages).toEqual(store.state.messages)
    })
  })

  it('actions.postMessage returns newly appended messages and mutate correctly', () => {
    return store.dispatch('postMessage', sampleMessages[0]).then((messages) => {
      expect(messages).toEqual(store.state.messages)
      expect(messages[0].message).toContain(sampleMessages[0].message)
      expect(messages[0].username).toContain(sampleMessages[0].username)
    })
  })
})

const sampleMessages = [{ username: 'test user', message: 'hello world' }]
