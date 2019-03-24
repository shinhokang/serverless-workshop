const Messages = require('../resources/messages')

module.exports = (app) => {
  app.get('/api/messages', (request, response) => {
    return response.json(Messages.all())
  })

  app.post('/api/messages', (request, response) => {
    Messages.post(request.body)
      .then((message) => {
        response.json(message)
      })
      .catch(() => {
        response.status(400).json({ message: 'error' })
      })
  })
}
