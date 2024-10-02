import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./pages/fixo/Topbar";
import Sidebar from "./pages/fixo/Sidebar";
import Dashboard from "./pages/dashboard";
import Oportunidades from "./pages/oportunidades";
import Painel from "./pages/painel";
import Trilhas from "./pages/trilhas";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import VideoExample from "../src/components/VideoDetail";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/painel" element={<Painel />} />
              <Route path="/trilhas" element={<Trilhas />} />
              <Route path="/video" element={<VideoExample />} /> 
              <Route path="/oportunidades" element={<Oportunidades />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
