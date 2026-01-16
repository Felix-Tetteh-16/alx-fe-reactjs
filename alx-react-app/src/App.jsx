import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./UserProfile";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
// import { useState } from "react";
// import "./App.css";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage />
      <UserProfile />
    </>
  );
}

export default App;
