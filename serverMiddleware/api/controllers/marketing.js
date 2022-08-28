import { isEmpty } from 'lodash'
import { onContactUs } from '../services/logsnag'

export const contactUs = async (req, res) => {
  try {
    console.log('contactUs')
    const { email, message } = req.body
    const logsnagRes = await onContactUs(JSON.stringify({
      email,
      message
    }))
    console.log('logsnagRes: ', logsnagRes)
    res.status(200)
      .json({
        ok: true
      })
  } catch (e) {
    console.error(e)
  }
}
