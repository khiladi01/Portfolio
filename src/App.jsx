import { Route, Routes } from 'react-router-dom'
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Skill from "./Pages/Skill";
import Chat from "./Pages/Chat";

function App() {

  return (
    <>
        <Nav />
        <Routes>

          <Route path="/" element={<Home />} />       
          <Route path="/project" element={<Project />} />       
          <Route path="/skill" element={<Skill />} />       
          <Route path="/chat" element={<Chat />} />       
             
        </Routes>
        <Footer />
    </>
  )
}

export default App
