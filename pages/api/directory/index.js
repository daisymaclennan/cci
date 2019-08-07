const sql = require('sql-template-strings')
const { query } = require('../../../lib/db')

export default async (req, res) => {
  const results = await query(sql`
    SELECT * FROM org
  `)

  //If there is an error executing the sql statement it will stop the program
  if (results.error) {
    throw results.error;
  }

  //Returns the results of the sql query
  res.json(
    results
  )
}
