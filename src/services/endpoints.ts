import { baseAPI } from './api-service';
import { AnalyzeTextRequestParams, AnalyzeTextResponse } from 'common';

export const endpoints = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    analyzeText: builder.mutation<AnalyzeTextResponse, AnalyzeTextRequestParams>({
      query: (params) => ({
        url: '/analyze-text',
        method: 'POST',
        body: params,
      }),
    }),
  }),
});

export const { useAnalyzeTextMutation } = endpoints;
