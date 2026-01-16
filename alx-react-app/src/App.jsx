import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./UserProfile";
import Header from "../src/components/Header";
import MainContent from "../src/components/MainContent";
import Footer from "../src/components/Footer";
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
