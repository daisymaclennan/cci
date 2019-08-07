import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import api from '../../lib/api'
import Layout from '../../components/layout.js'
import Link from 'next/link'

const Page = () => (
  <Layout>
    <h1>Admin</h1>
    <Link href='/admin/users'>
      <a>Users</a>
    </Link>
    <br/>
    <Link href='/admin/blog'>
      <a>Blog</a>
    </Link>
    <br/>
    <Link href='/admin/directory'>
      <a>Directory</a>
    </Link>
  </Layout>
)

export default Page
