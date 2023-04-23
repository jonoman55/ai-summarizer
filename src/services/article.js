// Article Summarizer API DOCS: https://rapidapi.com/restyler/api/article-extractor-and-summarizer

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * Rapid API Key
 */
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

/**
 * Article API
 */
export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', rapidApiKey);
      headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      // encodeURIComponent() function encodes special characters that may be present in the parameter values
      // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
      query: (params) => ({
        url: `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        responseHandler: async (response) => await response.json(),
      }),
      transformResponse: async (response, meta) => {
        // required for floating button with request remaining value
        const remaining_requests = meta?.response?.headers?.get('x-ratelimit-requests-remaining');
        if (remaining_requests) {
          localStorage.setItem('remaining_requests', JSON.stringify(remaining_requests));
        }
        return response;
      }
    }),
  }),
});

export const {
  useLazyGetSummaryQuery,
} = articleApi;