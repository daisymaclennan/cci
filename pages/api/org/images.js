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
      SELECT * FROM org_image WHERE org_id = ${req.body.id}
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
    return
  }



  //Deletes data
  if(req.method === 'DELETE'){
    return
  }
}
