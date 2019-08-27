import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import api from '../../../lib/api'
import Link from 'next/link'
import AdminLayout from '../../../components/admin-layout'
import AdminContentSection from '../../../components/admin-content-section'

const Page = ({orgs}) => (
  <AdminLayout>
    <AdminContentSection>
      <h2>Directory</h2>
      <a href="/admin/directory/categories">View categories</a>
      <a href="/admin/directory/add">Add new organisation</a>
      <ul>
        {orgs.map(org => (
          <Link href="/admin/directory/edit/[slug]" as={`/admin/directory/edit/${org.slug}`}>
            <a>
              <li>{org.name}</li>
            </a>
          </Link>
        ))}
      </ul>
    </AdminContentSection>
  </AdminLayout>
)

Page.getInitialProps = async (req) => {
  const orgs = await api('org')

  return {
    orgs: orgs.json
  }
}

export default Page
