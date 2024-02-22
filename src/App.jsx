import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Collections from "./pages/Collections";
import MenShoes from "./pages/MenShoes";
import WomenShoes from "./pages/WomenShoes";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Collections />} />
          <Route path="collections" element={<Collections />} />
          <Route path="menShoes" element={<MenShoes />} />
          <Route path="womenShoes" element={<WomenShoes />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
