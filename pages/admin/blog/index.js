import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import api from '../../../lib/api'
import Link from 'next/link'
import AdminLayout from '../../../admin-layout'
import AdminContentSection from '../../../admin-content-section'

const Page = ({posts}) => (
  <AdminLayout>
    <AdminContentSection>
      <h2>Blog</h2>
      <a href="/admin/blog/categories">View categories</a>
      <a href="/admin/blog/add">Add new post</a>
      <ul>
        {posts.map(post => (
          <Link href="/admin/blog/edit/[slug]" as={`/admin/blog/edit/${post.slug}`}>
            <a>
              <li>{post.title}</li>
            </a>
          </Link>
        ))}
      </ul>
    </AdminContentSection>
  </AdminLayout>
)

Page.getInitialProps = async ctx => {
  const posts = await api('blog', { ctx })

  return {
    posts: posts.json
  }
}

export default Page
