import { Render } from "./Components";
import { AppThemeProvider } from "./Providers";

function App() {
  return (
    <AppThemeProvider>
      <Render />
    </AppThemeProvider>
  );
}

export default App;
