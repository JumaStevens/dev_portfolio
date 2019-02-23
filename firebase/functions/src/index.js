//
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

// https
import * as Https from './https'

// initialize firebase admin
admin.initializeApp(functions.config().firebase)

// export https
export const https = Https
