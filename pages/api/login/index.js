const sql = require('sql-template-strings')
const { query } = require('../../../lib/db')
const bcrypt = require('bcrypt');
const saltRounds = 10;
import { sign } from 'jsonwebtoken'

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({});
    return;
  }

  //Selects the password where the email_address field is equal to the users entered email address
  const results = await query(sql`
    SELECT user_id, password FROM users WHERE email_address = ${req.body.email_address}
  `)

  //Throws an error if their is an issue with executing the sql statement
  if(results.error){
    throw results.error;
  }
  //Checks if any results are returned
  if(results.length == 0){
    res.status(401).json({});
    return;
  }

  //Checks that the password matches the one stored in the database
  const password = await bcrypt.compare(req.body.password, results[0].password);

  if(password){
    //Generates a json web token to be used a user authorisation
    var jwt = require('jsonwebtoken');
    var token = jwt.sign(results[0].user_id, process.env.JWT_SECRET);

    //Sets the user cookie to equal the value of their access token

    res.json({
      token
    })
  }else{
    console.log("wrong password");
    res.status(401).json({});
  }
}
