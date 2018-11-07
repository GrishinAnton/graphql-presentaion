const server = require('express')()

const api = require('./api')

server.get('/', (req, res) => {
    res.send('Hello GraqhQl')
})

server.use('/api', api)

server.listen(3000, () => console.log('Server Start'))