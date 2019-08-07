import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import api from '../../../lib/api'

const Page = ({users}) => (
  <div>
    <h2>Users</h2>
    <a href="/admin/users/add">Add new user</a>
    {users.map(user => (
    <ul>
      <li key={user.full_name}>
        <h3>Name: {user.full_name}</h3>
      </li>
      <li>
        <h3>Username: {user.username}</h3>
      </li>
      <li>
        <h3>Email address: {user.email_address}</h3>
      </li>
    </ul>
    ))}

  </div>
)

Page.getInitialProps = async (req) => {
  const users = await api('admin/users')

  return {
    users: users.json
  }
}

export default Page
