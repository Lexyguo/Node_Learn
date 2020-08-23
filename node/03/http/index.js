const api = require('./api')

api.listen(3000, () => {
    console.log('api listening on 3000')
})

// const proxy = require('./proxy')
// proxy.listen(4000, () => {
//     console.log('proxy listening on 4000')
// })