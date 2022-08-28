import app, { server } from './server'

const PORT = process.env.PORT || 5000
const WEBSOCKET_PORT = 3050

const main = async () => {
  try {
    console.log('Starting server main...')
    app.listen(PORT, () => {
      console.log(`Server listening on ports: ${PORT}`)
    })
  } catch(e) {
    console.error('Server main init error: ', e)
  }
}

main()
