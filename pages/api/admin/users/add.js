const sql = require('sql-template-strings')
const { query } = require('../../../../lib/db')
const bcrypt = require('bcrypt');
const saltRounds = 10;
var slug = require('slug')
var print = console.log.bind(console, '>')

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({});
    return;
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
  }
}
