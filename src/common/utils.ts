import { RcFile } from 'antd/es/upload';

import {
  AnalyzeFileResponse,
  AnalyzeTextResponse,
  AnalyzeYoutubeCommentsResponse,
  DataType,
} from './types';

export const extractVideoID = (url: string) => {
  const regex =
    /(?:https?:\/\/)?(?:www\.|m\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)|(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]+)/;
  const match = url.match(regex);
  return match ? match[1] || match[2] : null;
};

export const getTableData = (
  data: AnalyzeTextResponse | AnalyzeYoutubeCommentsResponse | AnalyzeFileResponse
): DataType[] => {
  if (isTextResult(data)) {
    return [
      {
        key: '0',
        text: data.text,
        author: 'You',
        published_at: new Date().toISOString(),
        sentiment: data.sentiment,
      },
    ];
  }

  return data.map((comment, idx) => ({
    key: idx.toString(),
    text: comment.text,
    author: 'author' in comment ? comment.author : 'You',
    published_at: 'published_at' in comment ? comment.published_at : new Date().toISOString(),
    sentiment: comment.sentiment,
  }));
};

const isTextResult = (data: unknown): data is AnalyzeTextResponse => {
  return typeof data === 'object' && !Array.isArray(data);
};

export const createFormData = (columnName: string, file: RcFile): FormData => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('column_name', columnName);

  return formData;
};
