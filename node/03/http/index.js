const api = require('./api')
const proxy = require('./proxy')

api.listen(3000, () => {
    console.log('api listening on 3000')
})

proxy.listen(4000, () => {
    console.log('proxy listening on 4000')
})