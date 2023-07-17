import { createClient } from '@sanity/client'
import { fetchQuery } from './utils/supports'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: 'onvx17d4',
  dataset: 'production',
  apiVersion: '2023-07-04',
  useCdn: true,
})

export const fetchRestaurants = async () => {
  let data = await client.fetch(fetchQuery).then((restaurants) => {
    return restaurants
  })
  return data
}

const builder = imageUrlBuilder(client)
export const urlFor = (source) => {
  return builder.image(source)
}

export default client