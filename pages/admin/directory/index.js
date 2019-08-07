import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import api from '../../../lib/api'
import Link from 'next/link'

const Page = ({orgs}) => (
  <div>
    <h2>Directory</h2>
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

  </div>
)

Page.getInitialProps = async (req) => {
  const orgs = await api('org')

  return {
    orgs: orgs.json
  }
}

export default Page
