import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomeScreen from './components/HomeScreen';
import RankTable from './components/RankTable';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<HomeScreen />} />
        <Route path="RankTable" element={<RankTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
