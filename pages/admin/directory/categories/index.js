import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import api from '../../../../lib/api'
import Link from 'next/link'
import AdminLayout from '../../../../components/admin-layout'
import AdminContentSection from '../../../../components/admin-content-section'

const Page = ({cats}) => (
  <AdminLayout>
    <AdminContentSection>
      <h2>Directory categories</h2>
      <a href="/admin/directory/categories/add">Add new category</a>
      <ul>
        {cats.map(cat => (
          <li>{cat.category_name}</li>
        ))}
      </ul>
    </AdminContentSection>
  </AdminLayout>
)

Page.getInitialProps = async ctx => {
  const cats = await api('org/categories', { ctx })

  return {
    cats: cats.json
  }
}

export default Page
