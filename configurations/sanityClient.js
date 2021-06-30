const sanityClient = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: false,
  apiVersion: '2021-06-27',
  token: process.env.SANITY_API_TOKEN,
};

export default sanityClient;