import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import New from "./components/New";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <New />
      </Box>
    </div>
  );
}

export default App;
