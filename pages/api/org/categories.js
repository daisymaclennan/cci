const sql = require('sql-template-strings')
import slug from 'slug'
const { query } = require('../../../lib/db')

export default async (req, res) => {
  //Updates the database
  /*if(req.method === 'PATCH'){
  }*/

  //Gets all Users
  if(req.method === 'GET'){
    const results = await query(sql`
      SELECT * FROM org_categories
      `)
    if(results.error){
      throw results.error;
    }else{
      res.json(
        results
      )
    }
  }

  //Sends data to the server
  if(req.method === 'POST'){
    var slugName = slug(req.body.category_name)
    slugName = slugName.toLowerCase();

    const results = await query(sql`
      INSERT INTO org_categories (category_name, parent_category_id, slug) VALUES (${req.body.category_name}, ${req.body.parent_category}, ${slugName})
      `)

    if(results.error){
      throw results.error;
    }

    const updatedCat = await query(sql`
      SELECT * FROM org_categories
    `)

    res.json(updatedCat[0])

    return
  }



  //Deletes data
  if(req.method === 'DELETE'){
    const results = await query(sql`
      DELETE * FROM org WHERE slug = ${req.query.slug}
    `)
    return
  }
}
