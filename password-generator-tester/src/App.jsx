import Background from "./Components/Background";
import PasswordStrengthTest from "./Components/PasswordStrengthTest";
import PasswordGenerator from "./Components/PasswordGenerator";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";

export default function App() {
  return (
    <div>
      <Background />
        <Nav/>
      <Routes>
        <Route path="/password-tester" element={<PasswordStrengthTest />} />
        <Route path="/" element={<PasswordGenerator />} />
      </Routes>
    </div>
  );
}
