import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import api from '../../lib/api'

const Page = ({ post }) => (
  <Layout>
    <div>
      <p>{post.title}</p>
      <p>{post.content}</p>
    </div>
  </Layout>
)

Page.getInitialProps = async ctx => {
  const post = await api(`blog/${ctx.query.slug}`, { ctx })

  return {
    post: post.json
  }
}

export default Page
