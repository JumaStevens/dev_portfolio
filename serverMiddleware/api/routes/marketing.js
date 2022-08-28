import { MarketingRouter } from './router'
import * as controllers from '../controllers/marketing'

MarketingRouter.post('/contact-us', controllers.contactUs)

export default MarketingRouter
