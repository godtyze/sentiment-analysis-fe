import { FC } from 'react';

import { Layout } from 'antd';

import 'styles/components/header.css';

const Header: FC = () => {
  return (
    <Layout.Header className="header">
      <h1>Sentiment Analysis</h1>
    </Layout.Header>
  );
};

export default Header;
