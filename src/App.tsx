import { Route, Routes } from "react-router-dom";
import ModernPortfolio from "./pages/ModernPortfolio";

function App(): React.JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<ModernPortfolio />} />
      </Routes>
    </>
  );
}

export default App;