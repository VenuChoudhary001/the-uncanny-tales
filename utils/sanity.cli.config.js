import sanityClient from '@sanity/client';

export const client=sanityClient({
    projectId:process.env.NEXT_APP_PROJECT_ID,
    dataset:process.env.NEXT_APP_DATASET,
    apiVersion:process.env.NEXT_APP_API_VERSION, // use current UTC date - see "specifying API version"!
    token:process.env.NEXT_APP_AUTH_TOKEN,
    useCdn: true, // `false` if you want to ensure fresh data
});

