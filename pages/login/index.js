import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import api from '../../lib/api'
import Router from 'next/router'

const Page = () => (
  <div>
    <h1>Log in</h1>
    <Formik
          initialValues={{email_address : '', password: ''}}
          onSubmit={async values => {
            const login = await api('login', {
              method: 'POST',
              body: JSON.stringify(values),
              headers: {
                "content-type": "application/json"
              }
            })
            if(login.res.ok){
              Router.push('/admin')
            }
          }
          }
          render={({ values, handleSubmit }) => (
            <form onSubmit={
              handleSubmit
            }>
              <Field type="email" name="email_address" placeholder="Email" />
              <Field type="password" name="password" placeholder="Password" />
              <button type="submit">Log in</button>
            </form>
          )}
        />
      </div>
)

export default Page
