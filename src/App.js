import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React from 'react';
import { firebaseApp } from "./firebase";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomeScreen from './components/HomeScreen';

function App() {
  firebaseApp();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
