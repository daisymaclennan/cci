import fetch from 'isomorphic-unfetch'
import { parseCookies } from 'nookies'

export default async function api (path, { ctx, ...options } = {}) {
  const headers = {}
  const { user } = parseCookies(ctx)

  if (user) {
    headers.Authorization = `Bearer ${user}`
  }

  // TODO: Make base URL configurable.
  const res = await fetch(`http://localhost:3000/api/${path}`, {
    ...options,
    credentials: 'include',
    headers: {
      ...options.headers,
      ...headers
    }
  })

  const json = await res.json()
  return { res, json }
}
