import React from 'react';

import Header from '@/components/organisms/Header';
import { StyledAppLayout } from '@/components/layouts/AppLayout/styled';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => (
  <StyledAppLayout>
    <Header />
    {children}
  </StyledAppLayout>
);

export default AppLayout;
