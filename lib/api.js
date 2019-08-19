import fetch from 'isomorphic-unfetch'

export default async function api (path, options) {
  // TODO: Make base URL configurable.
  const res = await fetch(`http://localhost:3000/api/${path}`, {
    ...options,
    credentials: 'include'
  })
  const json = await res.json()
  return {res, json}
}
