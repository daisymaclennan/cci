import { verify } from 'json-web-token'
var jwt = require('jsonwebtoken');

function verify_user(){
  if(!Cookies.get('user')){
    Router.push('/login')
  }
  var is_valid = jwt.verify(token, JWT_SECRET);
  if(!is_valid){
    res.status(401).json({})
    return
  }else{
    res.json({})
  }
}
