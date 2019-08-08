'use strict'

import { upload, move } from 'micro-upload'

export default upload(async (req, res) => {
  if(!req.files){
    res.status(400).json({})
  }
  console.log(req.files)

  let file = req.files.file
  await move(file, `/uploads/${file.name}`)
  res.json({filename: file.name})
})
