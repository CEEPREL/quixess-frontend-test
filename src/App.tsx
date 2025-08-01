import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import GlobalModal from "./components/popups/global-modal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalModal />
    </>
  );
}

export default App;
