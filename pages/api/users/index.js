const sql = require('sql-template-strings')
import slug from 'slug'
const { query } = require('../../../lib/db')
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
import apiAuth from '../../../lib/api-auth'

//require('../verify.js')

export default async (req, res) => {
  //Gets all Users
  if(req.method === 'GET'){
    if(!await apiAuth(req.cookies.user)){
      return res.status(401).json({})
    }
    const results = await query(sql`
      SELECT * FROM users
    `)

    //If there is an error executing the sql statement it will stop the program
    if (results.error) {
      console.log('Db error', results.error);
      return;
    }

    //Returns the results of the sql query
    res.json(results)
    return
  }

  //Sends data to the server
  if(req.method === 'POST'){
    if(!await apiAuth(req.cookies.user)){
      return res.status(401).json({})
    }
    const exists = await query(sql`
      SELECT user_id FROM users WHERE username = ${req.body.email_address} OR email_address = ${req.body.email_address}
    `)

    if(exists.length > 0){
      console.log('username exists');
    }else if(exists.error) {
      throw exists.error;
    }else{
      var slugName = slug(req.body.full_name)
      slugName = slugName.toLowerCase();

      const password = await bcrypt.hash(req.body.password, saltRounds);
      //console.log('password hashed', password)

      const results = await query(sql`
        INSERT INTO users (full_name, username, password, email_address, slug) VALUES ( ${req.body.full_name}, ${req.body.username}, ${password}, ${req.body.email_address}, ${slugName})
      `)
      if(results.error){
        throw results.error;
      }

      res.json({})
    }
  }
}
