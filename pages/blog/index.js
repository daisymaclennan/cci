import React from 'react'
import Link from 'next/link'
import api from '../../lib/api'
import Layout from '../../components/layout'

const Page = ({ posts }) => (
  <Layout>
    <h2>Blog</h2>
    <div>
    {posts.map( post => (
      <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
        <a>
          <h3>{post.name}</h3>
        </a>
      </Link>
    ))}
    </div>
  </Layout>
)

Page.getInitialProps = async ctx => {
  const posts = await api('blog', { ctx })

  return {
    posts: posts.json
  }
}

export default Page
