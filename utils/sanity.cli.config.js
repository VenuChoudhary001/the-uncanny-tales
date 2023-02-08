import sanityClient from '@sanity/client';

export const client=sanityClient({
    projectId: process.env.PROJECT_ID,
    dataset:process.env.DATASET,
    apiVersion:process.env.API_VERSION, // use current UTC date - see "specifying API version"!
    token:process.env.AUTH_TOKEN,
    useCdn: true, // `false` if you want to ensure fresh data
});

