const fastify = require('fastify')({ logger: true })

fastify.get('/now', () => {
  return { timestamp: (new Date()).getTime() }
})

fastify.get('/schedules', () => {
  return [
    {
      id: 'a',
      title: 'aaaa',
      date: (new Date('1995-12-17T03:24:00')).getTime(),
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    },
    {
      id: 'b',
      title: 'bbbb',
      date: (new Date('1995-12-18T09:30:00')).getTime(),
      description: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    },
    {
      id: 'c',
      title: 'cccc',
      date: (new Date('1995-12-19T09:30:00')).getTime(),
      description: 'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
    },
  ]
})

const start = async () => {
  try {
    await fastify.listen({ port: 3001 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
