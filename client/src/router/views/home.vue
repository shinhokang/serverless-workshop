<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import MessageList from '@components/MessageList'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, MessageList },
}
</script>

<template>
  <Layout>
    <h1>Honestly Chat Integration Message Sender</h1>
    <MessageList></MessageList>
  </Layout>
</template>
