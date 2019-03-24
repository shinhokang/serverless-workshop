<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import MessageList from '@components/MessageList'
import PostMessage from '@components/PostMessage'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, MessageList, PostMessage },
}
</script>

<template>
  <Layout>
    <h1>Honestly Chat Integration Message Sender</h1>
    <PostMessage></PostMessage>
    <MessageList></MessageList>
  </Layout>
</template>
