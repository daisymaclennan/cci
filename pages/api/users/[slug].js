const sql = require('sql-template-strings')
import slug from 'slug'
const { query } = require('../../../lib/db')
const bcrypt = require('bcrypt');
const saltRounds = 10;

export default async (req, res) => {
  //Update request
  if(req.method === 'PATCH'){
    var slugName = slug(req.query.name)
    slugName = slugName.toLowerCase();

    console.log(req.query.email_address)

    //Need to add featured image updating
    const results = await query(sql`
      UPDATE users SET full_name = ${req.query.full_name}, username = ${req.query.username}, email_address = ${req.query.email_address}, slug = ${slugName}  WHERE slug = ${req.query.slug}
    `)

    if(results.error){
      console.log(results.error);
    }

    const updatedOrg = await query(sql`
      SELECT * FROM users WHERE slug = ${req.query.slug}
    `)

    res.json(updatedOrg[0])

    return
  }

  //Gets all Users
  if(req.method === 'GET'){
    const results = await query(sql`
      SELECT * FROM users WHERE slug = ${req.query.slug}
    `)

    //If there is an error executing the sql statement it will stop the program
    if (results.error) {
      throw results.error;
    }

    //Returns the results of the sql query
    res.json(results[0])

    return
  }

  //Deletes the data
  if(req.method === 'DELETE'){
    const results = await query(sql`
      DELETE * FROM users WHERE slug = ${req.query.slug}
    `)

    //If there is an error executing the sql statement it will stop the program
    if (results.error) {
      throw results.error;
    }

    return
  }
}
