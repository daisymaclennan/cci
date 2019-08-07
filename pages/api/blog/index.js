const sql = require('sql-template-strings')
import slug from 'slug'
const { query } = require('../../../lib/db')

export default async (req, res) => {
  //Gets all Users
  if(req.method === 'GET'){
    const results = await query(sql`
      SELECT * FROM posts
      `)
    if(results.error){
      throw results.error;
    }else{
      res.json(results)
    }
  }

  //Sends data to the server
  if(req.method === 'POST'){
    //Makes a URL friendly slug
    var slugName = slug(req.body.name)
    slugName = slugName.toLowerCase();

    //Checks if there is an organisation with the same slugName
    const exists = await query(sql`
      SELECT id FROM org WHERE slug = ${slugName}
    `)

    if(exists.length > 0){
      console.log('A post is already listed with that name.')
      //Creates a random 3 digit number and attaches it onto the end of the slug to prevent the URLs breaking the program
      var random = Math.floor(Math.random() * 300);
      slugName = slugName.concat(random)
      console.log(slugName)
    }

    if(exists.error) {
      throw exists.error;
    }else{
      var today = new Date();
      var publish_date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
      //Need to add featured image handling

      //Need to insert the file path for the featured image into the database
      const results = await query(sql`
        INSERT INTO posts (title, excerpt, author_id, publish_date, is_published, slug, content) VALUES ( ${req.body.title}, ${req.body.excerpt}, ${req.body.feat_image}, ${author_id}, ${publish_date}, ${req.body.is_published}, ${req.body.slug}, ${req.body.content})
      `)
      if(results.error){
        throw results.error;
      }
    }
  }
}
