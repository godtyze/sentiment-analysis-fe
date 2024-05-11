import { baseAPI } from './api-service';
import {
  AnalyzeTextRequestParams,
  AnalyzeTextResponse,
  AnalyzeYoutubeCommentsRequestParams,
  AnalyzeYoutubeCommentsResponse,
} from 'common';

export const endpoints = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    analyzeText: builder.mutation<AnalyzeTextResponse, AnalyzeTextRequestParams>({
      query: (params) => ({
        url: '/analyze-text',
        method: 'POST',
        body: params,
      }),
    }),

    analyzeYoutubeComments: builder.mutation<
      AnalyzeYoutubeCommentsResponse,
      AnalyzeYoutubeCommentsRequestParams
    >({
      query: (params) => ({
        url: '/analyze-youtube-comments',
        method: 'POST',
        body: params,
      }),
    }),
  }),
});

export const { useAnalyzeTextMutation, useAnalyzeYoutubeCommentsMutation } = endpoints;
