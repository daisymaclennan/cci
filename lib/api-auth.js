var jwt = require('jsonwebtoken');

export default async function apiAuth(token){
  try{
    const verify = await jwt.verify(token, process.env.JWT_SECRET)
    return true
  }catch{
    return false
  }
}
