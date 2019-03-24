import axios from 'axios'

export const state = {
  messages: [],
}

export const getters = {}

export const mutations = {
  SET_MESSAGES(state, messages) {
    state.messages = messages
  },
}

export const actions = {
  fetchMessages({ commit }) {
    return axios.get(`/api/messages`).then((response) => {
      const messages = response.data
      commit('SET_MESSAGES', messages)
      return messages
    })
  },

  postMessage({ commit }, { username, message }) {
    return axios
      .post(`api/messages`, { username, message })
      .then((response) => {
        const messages = response.data
        commit('SET_MESSAGES', messages)
        return messages
      })
  },
}
