import { Box, Button , useColorModeValue} from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import CreatePage from "./pages/CreatePage.jsx"
import Navbar from "./components/Navbar.jsx"
function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App
