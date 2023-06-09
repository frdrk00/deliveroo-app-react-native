import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: '8q2a1u79',
  dataset: 'production',
  apiVersion: '2023-05-23',
  // useCdn: true,
  token: process.env.EXPO_APP_SANITY_TOKEN,
});

// sanity cors add http://localhost:3000

export const urlFor = (source) => builder.image(source);
const builder = imageUrlBuilder(client);

export default client;
