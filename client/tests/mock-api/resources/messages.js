module.exports = {
  all: [
    {
      id: 1,
      username: 'tester',
      message: 'the first sample sent message',
      createdAt: '2019-03-24 12:12:12',
    },
    {
      id: 2,
      username: 'tester2',
      message: 'Good morning, it is great Monday today!',
      createdAt: '2019-03-25 08:10:10',
    },
  ].reverse(),
  post({ username, message }) {
    return new Promise((resolve, reject) => {
      let currentDate = new Date()
      const createdAt = `${currentDate
        .toISOString()
        .substr(
          0,
          10
        )} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`

      const newMessages = this.all.reverse().push({
        id: 3,
        username,
        message,
        createdAt,
      })

      resolve(newMessages)
    })
  },
}
