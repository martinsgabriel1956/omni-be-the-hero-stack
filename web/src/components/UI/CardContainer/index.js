import React from 'react';

import { Container } from './styles';

export function CardContainer({children, ...props}) {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};
