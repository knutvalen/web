import { createClient } from 'next-sanity';
import sanityClientConfiguration from '../configurations/sanityClient';

const client = () => createClient(sanityClientConfiguration);

const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`;

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

export async function getAllPosts() {
  const results = await client()
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`);

  return getUniquePosts(results);
}
