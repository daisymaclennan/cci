const sql = require('sql-template-strings')
import slug from 'slug'
const { query } = require('../../../lib/db')
import apiAuth from '../../../lib/api-auth'

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
    if(!await apiAuth(req.cookies.user)){
      return res.status(401).json({})
    }
    //Makes a URL friendly slug
    var slugName = slug(req.body.title)
    slugName = slugName.toLowerCase();

    //Checks if there is an organisation with the same slugName
    const exists = await query(sql`
      SELECT id FROM posts WHERE slug = ${slugName}
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
    }
    var isToday = require('date-fns/is_today')
    console.log(isToday(new Date()))

    //Need to find a way to get hold of values which are not available yet. Have been filled with strings instead of the variable

    const results = await query(sql`
      INSERT INTO posts (title, excerpt, feat_img, author_id, publish_date, is_published, slug, content, category_id)
      VALUES (${req.body.title}, "We’re a blend of the curious, the technical and the creative. A talented group which is more than the sum of its parts. We create digital chemistry.", "/uploads/feat_img", 10, '2019-08-09 15:32:00', ${req.body.is_published}, ${slugName}, "We’re a blend of the curious, the technical and the creative. A talented group which is more than the sum of its parts. We create digital chemistry...", 2)
    `)
    if(results.error){
      throw results.error;
    }
  }
}
