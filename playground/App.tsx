// Dependencies
import { ThemeProvider } from '@lib/main';

// Pages
import Page from './index';

export default function App() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}
