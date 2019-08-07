import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import api from '../../../lib/api'
import Link from 'next/link'

const Page = ({users}) => (
  <div>
    <h2>Users</h2>
    <a href="/admin/users/add">Add new user</a>
    {users.map(user => (
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

Page.getInitialProps = async (req) => {
  const users = await api('users')

  return {
    users: users.json
  }
}

export default Page
