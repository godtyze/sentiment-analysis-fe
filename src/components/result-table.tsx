import { FC } from 'react';

import { Table, TableProps } from 'antd';

import {
  AnalyzeFileResponse,
  AnalyzeTextResponse,
  AnalyzeYoutubeCommentsResponse,
  DataType,
  getTableData,
} from 'common';

interface ResultTableProps {
  result?: AnalyzeTextResponse | AnalyzeYoutubeCommentsResponse | AnalyzeFileResponse;
  loading: boolean;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Text',
    dataIndex: 'text',
    key: 'text',
    width: '45%',
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
    width: '15%',
  },
  {
    title: 'Published At',
    dataIndex: 'published_at',
    key: 'published_at',
    width: '15%',
  },
  {
    title: 'Sentiment',
    dataIndex: 'sentiment',
    key: 'sentiment',
    width: '40%',
  },
];

const ResultTable: FC<ResultTableProps> = ({ result, loading }) => {
  const dataSource: DataType[] = result ? getTableData(result) : [];

  return (
    <Table
      bordered
      columns={columns}
      dataSource={dataSource}
      size="large"
      loading={loading}
      pagination={{
        pageSize: 8,
      }}
    />
  );
};

export default ResultTable;
