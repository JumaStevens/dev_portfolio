/**
 * Checks if the runtime environment is in production
 */
export const IS_PROD = process.env.NODE_ENV === 'production'

/**
 * The base url for app
 */
export const PRODUCTION_BASE_URL = 'https://www.hotfixcms.com'

// /**
//  * The base url for app microservices
//  */
// export const MICROSERVICES_BASE_URL = IS_PROD
//   ? 'https://market-shower-server.herokuapp.com'
//   : '/'

/**
 * The base url for API
 * prod: https://api.prod
 * dev: https://api.dev
 * local: http://localhost:5000
 */
export const API_BASE_URL = !IS_PROD
  ? 'https://api.hotfixcms.com'
  : 'http://localhost:5000'

/**
 * The base url for the CMS application
 */
export const CMS_APP_BASE_URL = IS_PROD
  ? 'https://app.hotfixcms.com'
  : 'https://app.hotfixcms.com'

/**
 * The url for the CMS application sign up page
 */
export const CMS_APP_AUTH_SIGN_UP_URL = `${CMS_APP_BASE_URL}/auth?signup=true`

/**
 * The Discord Hotfix url to invite users to the #welcome channel
 */
export const DISCORD_INVITE_URL = 'https://discord.gg/vuChUdxRSJ'

/**
 * The active client's locale (e.g. 'en', 'es', etc)
 */
export const locale = 'en'

/**
 * The active client's currency (e.g. 'USD', 'EUR', etc)
 */
export const currency = 'USD'

/**
 * The default client's locale (e.g. 'en', 'es', etc)
 */
export const defaultLocale = 'en'
