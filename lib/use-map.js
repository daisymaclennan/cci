import { useState } from 'react'

/**
 * useMap
 *
 * The map references the browser document, so it cannot be loaded on the server.
 *
 * Unfortunately, the way that it exports multiple React components makes it
 * incompatible with `React.lazy` (I think!).
 *
 * This hook allows us to load the map module only on the client, and then consume
 * the various exported components.
 */
const useMap = () => {
  const [ module, setModule ] = useState()

  if (!process.browser) {
    return
  }

  ;(async () => {
    const module = await import('react-leaflet')
    setModule(module)
  })()

  return module
}

export default useMap
