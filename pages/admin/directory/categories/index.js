import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import api from '../../../../lib/api'
import Link from 'next/link'

const Page = ({cats}) => (
  <div>
    <h2>Directory categories</h2>
    <a href="/admin/directory/categori/add">Add new category</a>
    <ul>
      {cats.map(cat => (
        <li>{cat.category_name}</li>
      ))}
    </ul>

  </div>
)

Page.getInitialProps = async (req) => {
  const cats = await api('org/categories')

  return {
    cats: cats.json
  }
}

export default Page
