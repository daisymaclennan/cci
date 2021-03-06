import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import Cookies from  'js-cookie'
import api from '../../lib/api'
import Router from 'next/router'
import { useCookies } from 'react-cookie'
import Layout from '../../components/layout'
import Link from 'next/link'


const Page = () => {
  const [ cookies ] = useCookies([ 'user' ]);
  const { user } = cookies
  if(user && process.browser){
    Router.push('/admin')
  }
  return(
    <Layout>
      <h1>Log in</h1>
      <Formik
            initialValues={{email_address : '', password: ''}}
            onSubmit={async values => {
              const login = await api(`login`, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                  "content-type": "application/json"
                }
              })
              if(login.res.ok){
                Cookies.set('user', login.json.token);
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
      <Link href="/login/forgot-password">
        <a>
          Forgotten your password?
        </a>
      </Link>
    </Layout>
)}

export default Page
