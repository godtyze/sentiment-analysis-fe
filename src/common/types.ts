export interface AnalyzeTextRequestParams {
  text: string;
}

export interface AnalyzeTextResponse {
  text: string;
  sentiment: Prediction[];
}

interface Prediction {
  label: 'positive' | 'negative' | 'neutral';
  score: number;
}
