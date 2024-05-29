import { FC } from 'react';

import { Button, Form, Input, Upload, UploadFile } from 'antd';
import { UploadChangeParam } from 'antd/es/upload';

import ResultTable from './result-table';
import { createFormData } from '../common';
import { useUploadFileMutation } from 'services';

interface FormValues {
  column_name: string;
  files: UploadFile[];
}

const normFile = (e: UploadChangeParam) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const UploadForm: FC = () => {
  const [uploadFile, { data, isLoading }] = useUploadFileMutation();

  const onFinish = async (values: FormValues) => {
    const { files, column_name } = values;

    const file = files[0].originFileObj;
    if (!file) {
      console.log('file error');
      return;
    }

    const formData = createFormData(column_name, file);

    await uploadFile(formData);
  };

  return (
    <>
      <Form name="upload" size="large" onFinish={onFinish}>
        <Form.Item
          name="files"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: 'choose file!' }]}
          hasFeedback
        >
          <Upload
            name="upload_csv"
            accept=".csv"
            maxCount={1}
            onChange={(e) => (e.file.status = 'done')}
            customRequest={() => {}}
          >
            <Button>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="column_name"
          hasFeedback
          initialValue="text"
          rules={[
            { required: true, message: 'Column name cannot be empty!' },
            { whitespace: true, message: 'Please enter valid column name!' },
          ]}
        >
          <Input size="large" placeholder="Enter column name" autoComplete="off" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Analyze File
          </Button>
        </Form.Item>
      </Form>
      <ResultTable result={data} loading={isLoading} />
    </>
  );
};

export default UploadForm;
