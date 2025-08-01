import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home";
import GlobalModal from "./components/popups/base-modal";
import WelcomePage from "./pages/welcome/welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
      <GlobalModal />
    </>
  );
}

export default App;
