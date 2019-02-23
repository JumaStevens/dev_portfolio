const functions = require('firebase-functions')
const express = require('express')
const { Nuxt } = require('nuxt')

const app = express()

const config = {
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath: '/'
  }
}
const nuxt = new Nuxt(config)

function handleRequest(req, res) {
  console.log('<SSR Request>')
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
  nuxt.renderRoute('/').then(result => {
    res.send(result.html)
  }).catch(e => {
    console.error(e)
    res.send(e)
  })
}
app.get('*', handleRequest)

// https://us-central1-portfolio-freelance.cloudfunctions.net/https-nuxtApp
exports.nuxtApp = functions.https.onRequest(app)
