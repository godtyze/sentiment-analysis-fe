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

export type AnalyzeYoutubeCommentsResponse = YoutubeCommentPrediction[];
export type AnalyzeFileResponse = CommentPrediction[];

export interface Prediction {
  label: 'positive' | 'negative' | 'neutral';
  score: number;
}

export interface CommentPrediction {
  sentiment: Prediction[];
  text: string;
}

export interface YoutubeCommentPrediction extends CommentPrediction {
  author: string;
  like_count: number;
  published_at: string;
  updated_at: string;
}

export interface DataType {
  key: string;
  text: string;
  author: string;
  published_at: string;
  sentiment: Sentiment;
}

export type Sentiment =
  | 'Positive'
  | 'Close to Positive'
  | 'Neutral'
  | 'Close to Negative'
  | 'Negative';
