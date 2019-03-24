import { mapState, mapGetters, mapActions } from 'vuex'

export const authComputed = {
  ...mapState('auth', {
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters('auth', ['loggedIn']),
}

export const authMethods = mapActions('auth', ['logIn', 'logOut'])

export const messagesComputed = {
  ...mapState('messages', {
    pastMessages: (state) => state.messages,
  }),
}

export const messagesMethods = mapActions('messages', [
  'fetchMessages',
  'postMessage',
])
