const Messages = require('../resources/messages')

module.exports = (app) => {
  app.get('/api/messages', (request, response) => {
    return response.json([...Messages.all].reverse())
  })

  app.post('/api/messages', (request, response) => {
    Messages.post(request.body)
      .then((messages) => {
        response.json([...messages].reverse())
      })
      .catch(() => {
        response.status(400).json({ message: 'error' })
      })
  })
}
