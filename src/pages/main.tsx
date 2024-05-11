import { FC } from 'react';

import 'styles/pages/main.css';
import TabMenu from 'components/tab-menu';

const Main: FC = () => {
  return (
    <main className="main-page">
      <TabMenu />
    </main>
  );
};

export default Main;
