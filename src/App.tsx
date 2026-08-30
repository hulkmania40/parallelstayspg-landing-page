import { ThemeProvider } from "./components/theme/theme-provider";
import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./LandingPage";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;