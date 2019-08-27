const sql = require('sql-template-strings')
import slug from 'slug'
const { query } = require('../../../lib/db')
import apiAuth from '../../../lib/api-auth'

export default async (req, res) => {
  //Gets all organisations
  if(req.method === 'GET'){
    const results = await query(sql`
      SELECT * FROM org
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
    if(!await apiAuth(req.cookies.user)){
      return res.status(401).json({})
    }
    //Throws an error if the request method is not POST
    if (req.method !== 'POST') {
      res.status(405).json({});
      return;
    }

    //Makes a URL friendly slug
    var slugName = slug(req.body.name)
    slugName = slugName.toLowerCase();

    /*Makes an excerpt out of the description
    const excerpt = req.body.desc

    if(req.body.excerpt){
      excerpt = req.body.excerpt
      console.log("dfnghjuijhgvjkhb")
    }else if(req.body.desc){
      excerpt = req.body.desc.slice(0, 175)
      console.log(req.body.desc.slice(0, 175))
    }

    console.log(excerpt)*/

    //Checks if there is an organisation with the same slugName
    const exists = await query(sql`
      SELECT id FROM org WHERE slug = ${slugName}
    `)


    if(exists.length > 0){
      console.log('A business is already listed with that name.')
      //Creates a random 3 digit number and attaches it onto the end of the slug to prevent the URLs breaking the program
      var random = Math.floor(Math.random() * 300);
      slugName = slugName.concat(random)
      console.log(slugName)
    }

    if(exists.error) {
      throw exists.error;
    }else{
      //Need to add featured image handling

      //Need to insert the file path for the featured image into the database
      const results = await query(sql`
        INSERT INTO org (name, address, postcode, owner, descr, phone_num, website, slug, email_address, excerpt, category_id) VALUES ( ${req.body.name}, ${req.body.address}, ${req.body.postcode}, ${req.body.owner}, ${req.body.desc}, ${req.body.phone_num}, ${req.body.website}, ${slugName}, ${req.body.email_address}, ${req.body.excerpt}, ${req.body.category_id})
      `)
      if(results.error){
        throw results.error;
      }
    }
    return "Added successfully"
  }
}
