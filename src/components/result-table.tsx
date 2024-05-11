import { FC } from 'react';

import { Table, TableProps } from 'antd';

import { AnalyzeTextResponse } from 'common';

interface DataType {
  key: string;
  text: string;
  author: string;
  published_at: string;
  sentiment: AnalyzeTextResponse['sentiment'];
}

interface ResultTableProps {
  result?: AnalyzeTextResponse;
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
    render: (_, record) => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {record.sentiment.map((el) => (
          <span key={el.label}>
            {el.label}: {el.score}
          </span>
        ))}
      </div>
    ),
  },
];

const ResultTable: FC<ResultTableProps> = ({ result, loading }) => {
  const dataSource: DataType[] = result
    ? [
        {
          key: '1',
          text: result.text,
          author: 'You',
          published_at: new Date().toISOString(),
          sentiment: result.sentiment,
        },
      ]
    : [];

  return (
    <Table
      bordered
      columns={columns}
      dataSource={dataSource}
      size="large"
      loading={loading}
      pagination={{
        pageSize: 10,
      }}
    ></Table>
  );
};

export default ResultTable;
