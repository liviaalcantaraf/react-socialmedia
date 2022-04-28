import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import New from "./components/New";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  let [mode, setMode] = useState("light");

  let darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode} />
            <Feed />
            <Rightbar />
          </Stack>
          <New />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
