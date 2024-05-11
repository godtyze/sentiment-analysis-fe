import { FC } from 'react';

import { Button, Form, Input } from 'antd';

import ResultTable from './result-table';
import { extractVideoID } from 'common';
import { useAnalyzeYoutubeCommentsMutation } from 'services';

interface FormValues {
  url: string;
}

const AnalyzeYoutubeCommentsForm: FC = () => {
  const [analyzeYoutubeComments, { data, isLoading }] = useAnalyzeYoutubeCommentsMutation();

  const onFinish = async (values: FormValues) => {
    await analyzeYoutubeComments({ video_id: extractVideoID(values.url)! });
  };

  return (
    <>
      <Form name="analyze-youtube-comments" size="large" onFinish={onFinish}>
        <Form.Item
          name="url"
          hasFeedback
          rules={[
            { required: true, message: 'url cannot be empty!' },
            { whitespace: true, message: 'url cannot be empty!' },
            () => ({
              validator(_, value) {
                console.log(value);
                if (!value || extractVideoID(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Please, enter valid youtube video url!'));
              },
            }),
          ]}
        >
          <Input size="large" placeholder="Enter your url here..." autoComplete="off" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Analyze Comments
          </Button>
        </Form.Item>
      </Form>
      <ResultTable result={data} loading={isLoading} />
    </>
  );
};

export default AnalyzeYoutubeCommentsForm;
