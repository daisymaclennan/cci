import jwt from 'jsonwebtoken'

const SCHEME_BEARER = 'Bearer'

export default async function apiAuth (req) {
  const { authorization } = req.headers

  if (!authorization) {
    return false
  }

  const [ scheme, value ] = authorization.split(' ')

  if (scheme !== SCHEME_BEARER) {
    return false
  }

  try{
    await jwt.verify(value, process.env.JWT_SECRET)
    return true
  } catch {
    return false
  }
}
