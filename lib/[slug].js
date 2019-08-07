const sql = require('sql-template-strings')
const { query } = require('../../../lib/db')

export default async (req, res) => {
  const results = await query(sql`
    SELECT * FROM org WHERE name = ${req.query.slug} LIMIT 1
  `)

  if (results.error) {
    throw results.error;
  }

  res.json(
    results[0]
  )


  /*const directoryBySlug = {
    sidigital: {
      name: 'Si digital',
      slug: 'sidigital'
    },
    'strong-island': {
      name: 'Strong Island',
      slug: 'strong-island'
    }
  }

  // If the requested entry doesn't exist...
  if (typeof directoryBySlug[req.query.slug] === 'undefined') {
    // Set the response status to 404 and send an empty obejct.
    res.status(404).json({})
    // Return early to stop any code below executing.
    return
  }

  res.json(directoryBySlug[req.query.slug])*/
}
