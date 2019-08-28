import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import api from '../../../lib/api'
import AdminLayout from '../../../components/admin-layout'
import AdminContentSection from '../../../components/admin-content-section'

const Page = () => (
  <AdminLayout>
    <AdminContentSection>
      <h1>Add user</h1>
      <Formik
            initialValues={{email_address : '', password: ''}}
            onSubmit={async values => {
              const register = await api('users', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                  "content-type": "application/json"
                }
              })
            }
            }
            render={({ values, handleSubmit }) => (
              <form onSubmit={
                handleSubmit
              }>
                <div>
                  <label for="name">Full Name:</label>
                  <Field type="text" name="full_name"/>
                </div>
                <div>
                  <label for="username">Username:</label>
                  <Field type="text" name="username"/>
                </div>
                <div>
                  <label for="email">Email Address:</label>
                  <Field type="text" name="email_address"/>
                </div>
                <div>
                  <label for="password">Password:</label>
                  <Field type="password" name="password"/>
                </div>
                <button type="submit">Log in</button>
              </form>
            )}
      />
    </AdminContentSection>
  </AdminLayout>
)

export default Page
