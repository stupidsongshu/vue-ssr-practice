const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const VueServerRender = require('vue-server-renderer')
// 服务端渲染的 bundle
const createApp = require('./dist/bundle.server').default

const server = express()
const renderer = VueServerRender.createRenderer()

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
server.use(bodyParser.json())

// 处理favicon
// app.use(async (ctx, next) => {
//   if (ctx.path === '/favicon.ico') {
//     await KoaSend(ctx, '/favicon.ico', { root: path.join(__dirname, '../') })
//   } else {
//     await next()
//   }
// })

// 静态资源目录
server.use('/', express.static(__dirname + '/dist'))
// server.use('/', express.static(path.join(__dirname, './dist')))

// 客户端渲染的 bundle
const clientBundleFileUrl = '/bundle.client.js'

server.post('/api/fetchItem', (req, res) => {
  res.send(`${req.body.id} - ${new Date().toLocaleString()}`)
})

server.get('*', (req, res) => {
  const context = { url: req.url }

  createApp(context).then(app => {
    const state = JSON.stringify(context.state)
    renderer.renderToString(app, (err, html) => {
      if (err) {
        if (err.code === 404) {
          return res.status(404).end('Page not found')
        } else {
          return res.status(500).end('Internal Server Error')
        }
      }

      res.end(`
      <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <title>vue-ssr</title>
          </head>
          <body>
            ${html}
            <!-- built files will be auto injected -->
            <script>window.__INITIAL_STATE__=${state}</script>
            <script src="${clientBundleFileUrl}"></script>
          </body>
        </html>
      `)
    })
  })
})

server.listen('8888', () => {
  console.log(`server is listening on: 8888`)
})
