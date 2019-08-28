import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import api from '../../../lib/api'
import Link from 'next/link'
import AdminLayout from '../../../components/admin-layout'
import AdminContentSection from '../../../components/admin-content-section'

const Page = ({users, error}) => (
  <div>
    <h2>Users</h2>
    <a href="/admin/users/add">Add new user</a>
    {error && (
      <p>There was an error fetching users.</p>
    )}
    {!error && users.map(user => (
    <Link href="/admin/users/edit/[slug]" as={`/admin/users/edit/${user.slug}`}>
      <a>
          <p>Name: {user.full_name}</p>
          <p>Username: {user.username}</p>
          <p>Email address: {user.email_address}</p>
      </a>
    </Link>
    ))}

  </div>
)

Page.getInitialProps = async ctx => {
  const users = await api('users', { ctx })
  const error = !users.res.ok

  return {
    users: users.json,
    error
  }
}

Page.defaultProps = {
  users: []
}

export default Page
