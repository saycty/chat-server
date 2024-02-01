import { useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/chat.jsx";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import NavBar from "./components/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Authcontext } from "./context/Authcontext.jsx";
import { ChatContextProvider } from "./context/ChatContext.jsx";

function App() {
  const { user } = useContext(Authcontext);
  return (
    <ChatContextProvider user={user}>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={user ? <Chat /> : <Login />} />
          <Route path="/register" element={user ? <Chat /> : <Register />} />
          <Route path="/login" element={user ? <Chat /> : <Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </ChatContextProvider>
  );
}

export default App;
