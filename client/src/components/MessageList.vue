<script>
import { messagesComputed, messagesMethods } from '@state/helpers'

export default {
  computed: {
    ...messagesComputed,
  },
  mounted() {
    this.fetchMessages()
  },
  methods: {
    ...messagesMethods,
  },
}
</script>

<template>
  <div>
    <h3>Sent messages</h3>
    <div v-for="message in pastMessages" :key="message.id" class="_message-box">
      <div>{{message.message}}</div>
      <div class="_info">
        <div class="_username">{{message.username}}</div>at
        <div class="_datetime">{{message.createdAt}}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';

._message-box {
  display: flex !important;
  flex-direction: column;
  border: 1px solid;
  margin: 1rem;
  padding: 1rem;

  ._info {
    display: flex !important;
    flex-direction: row;

    ._username {
      margin-left: auto;
      margin-right: 0.5rem;
    }
    ._datetime {
      margin-left: 0.5rem;
    }
  }
}
</style>
