const sql = require('sql-template-strings')
const { query } = require('../../../../lib/db')
const bcrypt = require('bcrypt');
const saltRounds = 10;

export default async (req, res) => {
  const results = await query(sql`
    SELECT * FROM users
    `)
  if(results.error){
    throw results.error;
  }else{
    res.json(
      results
    )
  }
}
