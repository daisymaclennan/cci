import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../../components/layout'
import api from '../../../../lib/api'
import { Formik, Form, Field, FieldArray } from 'formik';

const Page = ({ user }) => (
  <div>
    <h1>Edit {user.full_name}</h1>
    <Formik
          initialValues={{full_name : user.full_name, username: user.username, email_address: user.email_address}}
          onSubmit={async values => {
            const register = await api(`users/${user.slug}`, {
              method: 'PATCH',
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
                <label for="full_name">Full Name:</label>
                <Field type="text" name="full_name"/>
              </div>
              <div>
                <label for="username">Username:</label>
                <Field type="text" name="username"/>
              </div>
              <div>
                <label for="email_address">Email Address:</label>
                <Field type="text" name="email_address"/>
              </div>
              <button type="submit">Update</button>
            </form>
          )}
        />
      </div>
)

Page.getInitialProps = async ({ query }) => {
  const user = await api(`users/${query.slug}`)

  return {
    user: user.json
  }
}

export default Page
