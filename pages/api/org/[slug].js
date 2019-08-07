const sql = require('sql-template-strings')
import slug from 'slug'
const { query } = require('../../../lib/db')

export default async (req, res) => {
  //Update request
  if(req.method === 'PATCH'){
    var slugName = slug(req.body.name)
    slugName = slugName.toLowerCase();

    //Need to add featured image updating
    const results = await query(sql`
      UPDATE org SET name = ${req.body.name}, address = ${req.body.address}, postcode = ${req.body.postcode}, owner = ${req.body.owner}, descr = ${req.body.desr}, phone_num = ${req.body.phone_num}, website = ${req.body.website}, slug = ${slugName}  WHERE slug = ${req.query.slug}
    `)

    if(results.error){
      console.log(results.error);
    }
  }

  //Gets all Users
  if(req.method === 'GET'){
    const results = await query(sql`
      SELECT * FROM org WHERE slug = ${req.query.slug}
      `)
    if(results.error){
      throw results.error;
    }else{
      res.json(results[0])
    }
    return
  }

  //Deletes the data-- not nessacary yet
  /*if(req.method === 'DELETE'){
    const results = await query(sql`
      DELETE * FROM org WHERE slug = ${req.query.slug}
    `)
    return
  }*/
}