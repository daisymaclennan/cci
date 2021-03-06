const sql = require('sql-template-strings')
import slug from 'slug'
const { query } = require('../../../lib/db')
import apiAuth from '../../../lib/api-auth'

export default async (req, res) => {
  //Update request
  if(req.method === 'PATCH'){
    if(!await apiAuth(req)){
      return res.status(401).json({})
    }
    var slugName = slug(req.body.name)
    slugName = slugName.toLowerCase();

    //Need to add featured image updating
    const results = await query(sql`
      UPDATE org SET name = ${req.body.name}, address = ${req.body.address}, postcode = ${req.body.postcode}, owner = ${req.body.owner}, descr = ${req.body.descr}, phone_num = ${req.body.phone_num}, website = ${req.body.website}, slug = ${slugName}, email_address = ${req.body.email_address}, excerpt = ${req.body.excerpt}, category_id = ${req.body.category}  WHERE slug = ${req.query.slug}
    `)

    if(results.error){
      console.log(results.error);
    }
  }

  //Gets all Organisations
  if(req.method === 'GET'){
    const results = await query(sql`
      SELECT * FROM org WHERE slug = ${req.query.slug}
      `)

    if(results.error){
      throw results.error;
    }

    const images = await query(sql`
      SELECT * FROM org_images WHERE org_id = ${results[0].id}
      `)

    if(images.error){
      throw images.error
    }

    results[0].images = images

    res.json(results[0])
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
