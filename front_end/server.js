const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const logger = require('@vercel/next-logger')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Logging request URL, method, and status code
    const { url, method } = req
    const { pathname } = parse(url)

    logger.info(`${req.method} ${pathname}`)

    app.handle(req, res, (result) => {
      if (result.finished) {
        // Logging response status code
        logger.info(`${res.statusCode}`)
      }
      return result
    })
  }).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})