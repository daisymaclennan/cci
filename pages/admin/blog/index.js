import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import api from '../../../lib/api'
import Link from 'next/link'

const Page = ({posts}) => (
  <div>
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

  </div>
)

Page.getInitialProps = async (req) => {
  const posts = await api('blog')

  return {
    posts: posts.json
  }
}

export default Page
