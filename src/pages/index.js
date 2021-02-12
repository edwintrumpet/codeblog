import { ToolOutlined } from '@ant-design/icons';
import { Result } from 'antd';
import React from 'react';

export default function index() {
  return (
    <Result
      icon={<ToolOutlined />}
      status="warning"
      title="Sitio en construcción"
    />
  );
}
