import { FC, useMemo } from 'react';

import { Tabs, TabsProps } from 'antd';

import AnalyzeTextForm from './analyze-text-form';
import AnalyzeYoutubeCommentsForm from './analyze-youtube-comments-form';
import UploadForm from './upload-form';

const TabMenu: FC = () => {
  const items: TabsProps['items'] = useMemo(
    () => [
      {
        key: '1',
        label: 'Text Analysis',
        children: <AnalyzeTextForm />,
      },
      {
        key: '2',
        label: 'File Upload',
        children: <UploadForm />,
      },
      {
        key: '3',
        label: 'Youtube Comments',
        children: <AnalyzeYoutubeCommentsForm />,
      },
    ],
    []
  );

  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      style={{ maxWidth: 1000, width: '100%', rowGap: '10px' }}
      centered={true}
    />
  );
};

export default TabMenu;
