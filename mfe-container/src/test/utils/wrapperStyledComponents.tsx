import { RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '~/styles';

export const WrapperWithStyledComponents = (
  fn: (children: React.ReactElement) => RenderResult,
  children: React.ReactElement
) => fn(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
