// test-utils.js
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RenderOptions, render as rtlRender } from '@testing-library/react';
import { ReactElement } from 'react';

const queryClient = new QueryClient();

function render(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return rtlRender(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>, options);
}

export * from '@testing-library/react';

export { render };
