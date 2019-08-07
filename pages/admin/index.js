import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import api from '../../lib/api'
import Layout from '../../components/layout.js'
import Link from 'next/link'

const Page = () => (
  <Layout>
    <p>Sed risus adipiscing hendrerit in vestibulum sed aenean, sodales vivamus est risus aenean vestibulum. Lorem ut sollicitudin sapien in vestibulum ut suscipit amet porttitor. Vestibulum ipsum in sapien est consectetur ante. Nunc condimentum vivamus aenean ante risus condimentum euismod, ipsum, faucibus ante in adipiscing lorem.</p>
    <Link href='/admin/users'>
      <a>Users</a>
    </Link>
    <br/>
    <Link href='/admin/blog'>
      <a>Blog</a>
    </Link>
    <br/>
    <Link href='/admin/notifications'>
      <a>Notifications</a>
    </Link>
  </Layout>
)

export default Page
