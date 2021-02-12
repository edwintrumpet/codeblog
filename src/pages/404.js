import { Button, Result } from 'antd';
import { Link } from 'gatsby';
import React from 'react';

export default function NotFoundPage() {
  return (
    <Result
      extra={(
        <Link to="/">
          <Button type="primary">
            Volver al inicio
          </Button>
        </Link>
      )}
      status="404"
      subTitle="Ups, parece que el sitio que buscas no existe"
      title="404"
    />
  );
}
