<script>
import { messagesComputed, messagesMethods } from '@state/helpers'

export default {
  data() {
    return {
      message: '',
      username: '',
    }
  },
  computed: {
    ...messagesComputed,
  },
  methods: {
    ...messagesMethods,
    postClicked() {
      this.postMessage({
        username: this.username,
        message: this.message,
      }).then(() => {
        this.cleanData()
      })
    },
    cleanData() {
      this.message = ''
      this.username = ''
    },
  },
}
</script>

<template>
  <div>
    <h3>Post new message</h3>
    <div>
      <input v-model="message" type="text" placeholder="message" class="_text">
    </div>
    <div>
      <input v-model="username" type="text" placeholder="user name">
      <button @click="postClicked">POST</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';

._text {
  width: 100%;
}
</style>
