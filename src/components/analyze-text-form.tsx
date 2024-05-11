import { FC } from 'react';

import { Button, Form, Input } from 'antd';

import ResultTable from './result-table';
import { useAnalyzeTextMutation } from 'services';

interface FormValues {
  text: string;
}

const AnalyzeTextForm: FC = () => {
  const [analyzeText, { data, isLoading }] = useAnalyzeTextMutation();

  const onFinish = async (values: FormValues) => {
    await analyzeText(values);
  };

  return (
    <>
      <Form name="analyze-text" size="large" onFinish={onFinish}>
        <Form.Item
          name="text"
          hasFeedback
          rules={[
            { required: true, message: 'Text cannot be empty!' },
            { whitespace: true, message: 'Text cannot be empty!' },
          ]}
        >
          <Input.TextArea
            size="large"
            placeholder="Enter your text here..."
            autoComplete="off"
            rows={4}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Analyze Text
          </Button>
        </Form.Item>
      </Form>
      <ResultTable result={data} loading={isLoading} />
    </>
  );
};

export default AnalyzeTextForm;
