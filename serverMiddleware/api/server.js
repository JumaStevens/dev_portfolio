const express = require('express')
const cors = require('cors')
const http = require('http')
const cookieParser = require('cookie-parser')()
import {
  MarketingRouter
} from './routes/router'
import './routes/marketing'

/** Initialize server */
const app = express()

/** Allow cross-origin requests */
app.use(cors({ origin: true }))

/** Parse cookies */
// app.use(cookieParser)

app.use(express.json())

/** Avoides Heroku $PORT error */
app.get('/', (req, res) => {
  res.status(200).json({ ok: true })
})

/** API router **/
app.use('/marketing', MarketingRouter)

export const server = http.createServer(app)
export default app
