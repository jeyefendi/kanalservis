import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ContentPage } from "./pages/ContentPage";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
          <Route path="/content" element={<ContentPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
