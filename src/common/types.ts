export interface AnalyzeTextRequestParams {
  text: string;
}

export interface AnalyzeTextResponse {
  text: string;
  sentiment: Prediction[];
}

export interface AnalyzeYoutubeCommentsRequestParams {
  video_id: string;
}

export type AnalyzeYoutubeCommentsResponse = YoutubeCommentSentiment[];

interface Prediction {
  label: 'positive' | 'negative' | 'neutral';
  score: number;
}

export interface YoutubeCommentSentiment {
  author: string;
  like_count: number;
  published_at: string;
  sentiment: Prediction[];
  text: string;
  updated_at: string;
}

export interface DataType {
  key: string;
  text: string;
  author: string;
  published_at: string;
  sentiment: AnalyzeTextResponse['sentiment'];
}
