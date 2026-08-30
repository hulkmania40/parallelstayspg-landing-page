import { ThemeProvider } from "./components/theme/theme-provider";
import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./LandingPage";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem storageKey="vite-ui-theme">
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;